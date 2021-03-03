<template>
    <tab-bar>
      <tab-bar-item path='/home' activeColor="blue">
        <i class="iconfont icon-zhuye" slot="item-icon"></i>
        <i class="iconfont icon-zhuyelight-copy" slot="item-icon-active"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <i class="iconfont icon-video" slot="item-icon"></i>
        <i class="iconfont icon-videolight-copy" slot="item-icon-active"></i>
        <div slot="item-text">分享</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <i class="iconfont icon-shoucang" slot="item-icon"></i>
        <i class="iconfont icon-shoucanglight-copy" slot="item-icon-active"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/prefile'>
        <i class="iconfont icon-guanyuwomen1" slot="item-icon"></i>
        <i class="iconfont icon-guanyuwomen1light-copy" slot="item-icon-active"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../common/tabber/TabBar'
import TabBarItem from '../common/tabber/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style scoped>
@import '../../assets/css/base.css';
</style>