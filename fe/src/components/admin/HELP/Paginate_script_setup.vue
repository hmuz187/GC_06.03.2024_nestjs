<template>
    <ul :class="containerClass" v-if="!noLiSurround">
        <li v-if="firstLastButton" :class="[pageClass, firstPageSelected() ? disabledClass : '']">
            <a class="cursor-pointer" @click="selectFirstPage()" @keyup.enter="selectFirstPage()" :class="pageLinkClass"
                :tabindex="firstPageSelected() ? -1 : 0" v-html="firstButtonText"></a>
        </li>

        <li v-if="!(firstPageSelected() && hidePrevNext)" :class="[prevClass, firstPageSelected() ? disabledClass : '']">
            <a class="cursor-pointer" @click="prevPage()" @keyup.enter="prevPage()" :class="prevLinkClass"
                :tabindex="firstPageSelected() ? -1 : 0" v-html="prevText"></a>
        </li>

        <li v-for="page in pages"
            :class="[pageClass, page.selected ? activeClass : '', page.disabled ? disabledClass : '', page.breakView ? breakViewClass : '']">
            <a class="cursor-pointer" v-if="page.breakView" :class="[pageLinkClass, breakViewLinkClass]" tabindex="0">
                <slot name="breakViewContent">{{ breakViewText }}</slot>
            </a>
            <a class="cursor-pointer" v-else-if="page.disabled" :class="pageLinkClass" tabindex="0">{{ page.content }}</a>
            <a class="cursor-pointer" v-else @click="handlePageSelected(page.index + 1)"
                @keyup.enter="handlePageSelected(page.index + 1)" :class="pageLinkClass" tabindex="0">{{ page.content }}</a>
        </li>

        <li v-if="!(lastPageSelected() && hidePrevNext)" :class="[nextClass, lastPageSelected() ? disabledClass : '']">
            <a class="cursor-pointer" @click="nextPage()" @keyup.enter="nextPage()" :class="nextLinkClass"
                :tabindex="lastPageSelected() ? -1 : 0" v-html="nextText"></a>
        </li>

        <li v-if="firstLastButton" :class="[pageClass, lastPageSelected() ? disabledClass : '']">
            <a class="cursor-pointer" @click="selectLastPage()" @keyup.enter="selectLastPage()" :class="pageLinkClass"
                :tabindex="lastPageSelected() ? -1 : 0" v-html="lastButtonText"></a>
        </li>
    </ul>

    <div :class="containerClass" v-else>
        <a class="cursor-pointer" v-if="firstLastButton" @click="selectFirstPage()" @keyup.enter="selectFirstPage()"
            :class="[pageLinkClass, firstPageSelected() ? disabledClass : '']" tabindex="0" v-html="firstButtonText"></a>
        <a class="cursor-pointer" v-if="!(firstPageSelected() && hidePrevNext)" @click="prevPage()"
            @keyup.enter="prevPage()" :class="[prevLinkClass, firstPageSelected() ? disabledClass : '']" tabindex="0"
            v-html="prevText"></a>
        <template v-for="page in pages">
            <a class="cursor-pointer" v-if="page.breakView"
                :class="[pageLinkClass, breakViewLinkClass, page.disabled ? disabledClass : '']" tabindex="0">
                <slot name="breakViewContent">{{ breakViewText }}</slot>
            </a>
            <a class="cursor-pointer" v-else-if="page.disabled"
                :class="[pageLinkClass, page.selected ? activeClass : '', disabledClass]" tabindex="0">{{ page.content
                }}</a>
            <a class="cursor-pointer" v-else @click="handlePageSelected(page.index + 1)"
                @keyup.enter="handlePageSelected(page.index + 1)" :class="[pageLinkClass, page.selected ? activeClass : '']"
                tabindex="0">{{ page.content }}</a>
        </template>
        <a class="cursor-pointer" v-if="!(lastPageSelected() && hidePrevNext)" @click="nextPage()" @keyup.enter="nextPage()"
            :class="[nextLinkClass, lastPageSelected() ? disabledClass : '']" tabindex="0" v-html="nextText"></a>
        <a class="cursor-pointer" v-if="firstLastButton" @click="selectLastPage()" @keyup.enter="selectLastPage()"
            :class="[pageLinkClass, lastPageSelected() ? disabledClass : '']" tabindex="0" v-html="lastButtonText"></a>
    </div>
</template>
  
<script setup>
import { ref, computed, onBeforeUpdate, defineProps, defineEmits } from 'vue';

const props = defineProps(['value', 'pageCount', 'forcePage', 'clickHandler', 'pageRange', 'marginPages', 'prevText', 'nextText', 'breakViewText', 'containerClass', 'pageClass', 'pageLinkClass', 'prevClass', 'prevLinkClass', 'nextClass', 'nextLinkClass', 'breakViewClass', 'breakViewLinkClass', 'activeClass', 'disabledClass', 'noLiSurround', 'firstLastButton', 'firstButtonText', 'lastButtonText', 'hidePrevNext']);

const emits = defineEmits(['input']);

const innerValue = ref(1);

onBeforeUpdate(() => {
    if (props.forcePage === undefined) return;
    if (props.forcePage !== selected.value) {
        innerValue.value = props.forcePage;
    }
});

const selected = computed({
    get: () => props.value || innerValue.value,
    set: (newValue) => {
        innerValue.value = newValue;
    }
});

const pages = computed(() => {
    let items = {};

    if (props.pageCount <= props.pageRange) {
        for (let index = 0; index < props.pageCount; index++) {
            let page = {
                index: index,
                content: index + 1,
                selected: index === (selected.value - 1)
            };
            items[index] = page;
        }
    } else {
        const halfPageRange = Math.floor(props.pageRange / 2);

        let setPageItem = index => {
            let page = {
                index: index,
                content: index + 1,
                selected: index === (selected.value - 1)
            };

            items[index] = page;
        };

        let setBreakView = index => {
            let breakView = {
                disabled: true,
                breakView: true
            };

            items[index] = breakView;
        };

        // 1st - loop thru low end of margin pages
        for (let i = 0; i < props.marginPages; i++) {
            setPageItem(i);
        }

        // 2nd - loop thru selected range
        let selectedRangeLow = 0;
        if (selected.value - halfPageRange > 0) {
            selectedRangeLow = selected.value - 1 - halfPageRange;
        }

        let selectedRangeHigh = selectedRangeLow + props.pageRange - 1;
        if (selectedRangeHigh >= props.pageCount) {
            selectedRangeHigh = props.pageCount - 1;
            selectedRangeLow = selectedRangeHigh - props.pageRange + 1;
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= props.pageCount - 1; i++) {
            setPageItem(i);
        }

        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > props.marginPages) {
            setBreakView(selectedRangeLow - 1);
        }

        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < props.pageCount - props.marginPages) {
            setBreakView(selectedRangeHigh + 1);
        }

        // 3rd - loop thru high end of margin pages
        for (let i = props.pageCount - 1; i >= props.pageCount - props.marginPages; i--) {
            setPageItem(i);
        }
    }
    return items;
});

const handlePageSelected = (selected) => {
    if (selected === selected.value) return;

    innerValue.value = selected;
    emits('input', selected);
    props.clickHandler(selected);
};

const prevPage = () => {
    if (selected.value <= 1) return;

    handlePageSelected(selected.value - 1);
};

const nextPage = () => {
    if (selected.value >= props.pageCount) return;

    handlePageSelected(selected.value + 1);
};

const firstPageSelected = computed(() => selected.value === 1);

const lastPageSelected = computed(() => selected.value === props.pageCount || props.pageCount === 0);

const selectFirstPage = () => {
    if (selected.value <= 1) return;

    handlePageSelected(1);
};

const selectLastPage = () => {
    if (selected.value >= props.pageCount) return;

    handlePageSelected(props.pageCount);
};
</script>
  