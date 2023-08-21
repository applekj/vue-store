<template>
  <div class="clearfix selector">
    <div class="type-wrap logo">
      <div class="fl key brand">品牌</div>
      <div class="value logos">
        <ul class="logo-list">
          <li v-for="(item, index) in trademarkList" :key="index">{{ item.tmName }}</li>
        </ul>
      </div>
      <div class="ext">
        <a href="javascript:void(0);" class="sui-btn">多选</a>
        <a href="javascript:void(0);">更多</a>
      </div>
    </div>
    <div class="type-wrap" v-for="(item, index) in attrsList" :key="index">
      <div class="fl key">{{ item.attrName }}</div>
      <div class="fl value">
        <ul class="type-list">
          <li v-for="(itemChild, i) in item.attrValueList" :key="i">
            <a>{{ itemChild }}</a>
          </li>
        </ul>
      </div>
      <div class="fl ext"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchSelector',
  computed: {
    ...mapGetters(['trademarkList', 'attrsList'])
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>