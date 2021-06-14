<template>
	<view class="content">
		<view>
			<text class="title">{{title}}</text>
      <button>ceshi</button>
		</view>
	</view>
</template>

<script>
import request from "@/api/request"
export default {
  data() {
    return {
      title: "Hello UniApp "
    }
  },
  onLoad() {
    this.test()
    console.log("onLoad")
  },
  methods: {
    async test() {
      let data = await request.get("/test/")
      console.log(data)
      console.log("after")
    }
  }
}
</script>

<style lang="scss">
	.title {
		font-size: 36px;
    color: $uni-color-primary;
	}
</style>
