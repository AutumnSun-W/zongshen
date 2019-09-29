<template>
  <div class="foter">
    <van-popup v-model="show" position="bottom" :style="{ height: '65%' }">
      <div class="dizi">
        <van-nav-bar title="地址添加" />
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-set-default
          show-search-result
          @save="onSave"
        />
      </div>
    </van-popup>

    <div class="guanli">
      <p>地址管理</p>
      <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
    </div>
  </div>
</template>


<script>
import area from "../../data/area";
import api from "../../api/user";
import { Dialog } from "vant";

export default {
  name: "mySite",
  data() {
    return {
      areaList: area,
      list: [],
      show: false,
      chosenAddressId: 0,
      getAddress: ""
    };
  },
  methods: {
    onSave(content) {
      let username = this.$store.state.username;
      let address =
        content.province +
        content.city +
        content.county +
        content.addressDetail;
      let params = {
        username: username,
        name: content.name,
        tel: content.tel,
        address: address
      };
      api.postaddaddress(params).then(data => {
        this.show = false;
        let param = { username: username };
        api.postadress(param).then(data => {
          for (let i = 0; i < data.data[0].list.length; i++) {
            data.data[0].list[i].id = i;
            this.list = data.data[0].list;
          }
        });
      });
    },
    onAdd() {
      this.show = true;
    },
    onEdit(item, index) {
      Dialog.confirm({
        title: "删除",
        message: "是否删除此地址"
      })
        .then(() => {
          let username = this.$store.state.username;
          let params = {
            username: username,
            name: item.name,
            tel: item.tel,
            address: item.address
          };
          api.postDelAddress(params).then(data => {
            let param = { username: username };
            api.postadress(param).then(data => {
              if (data.data[0].list.length==0) {
                this.list = [];
              } else {
                for (let i = 0; i < data.data[0].list.length; i++) {
                  data.data[0].list[i].id = i;
                  this.list = data.data[0].list;
                }
              }
            });
          });
        })
        .catch(() => {});
    }
  },
  mounted() {
    let username = this.$store.state.username;
    let param = { username: username };
    api.postadress(param).then(data => {
      for (let i = 0; i < data.data[0].list.length; i++) {
        data.data[0].list[i].id = i;
        this.list = data.data[0].list;
      }
    });
  }
};
</script>


<style  >
.foter {
  padding: 10px;
  color: #999;
  font-size: 14px;
}
.foter .van-address-edit__buttons {
  padding: 16px 16px;
}
.guanli .van-address-list__add {
  bottom: 50px;
  z-index: 1008;
}
</style>
