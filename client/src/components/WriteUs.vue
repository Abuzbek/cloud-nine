 <template>
 <div class="box">
     <div class="wrappering pt-5">
       <h2>Murojaat qiling</h2>
    <div class="md-form form-sm">
      <input v-model="name" type="text" id="form8" class="form-control" placeholder="Ismingiz">
    </div>
    <div class="md-form form-sm">
      <input v-model="phone"  type="text" id="form8" class="form-control" placeholder="Telefon">
    </div>
    <div class="md-form position form-sm">
      <button class="list" @click="list = !list">{{ selectedItem ? items[selectedItem].title : "Maxsulotlar" }}<i class="fas fa-chevron-right"></i></button>
      <div class="list-parent" v-show="list">
        <div class="list-item" @click="list = !list; selectedItem = i" v-for="(n, i) in items" :key="n.title" :name="i" >{{ n.title }}</div>
      </div>
    </div>
    <div class="md-form form-sm">
      <button @click="submitbtn" class="submit">Jo'nating</button>
    </div>
  </div>
 </div>

</template>
<script>
import  axios  from 'axios';
export default {
  name: 'WriteUs',
  data(){
    return {
      selectedItem:null,
      name:null,
      phone:null,
      list: false,
      items:[{},{title:'Web sayt'},{title:'Mobil ilova'},{title:'Telegram bot'},{title:'Grafik dizayn'}]
    }
  },
  methods: {
    submitbtn(){
      console.log({
        name: this.name,
        phone: this.phone,
        list: this.items[this.selectedItem].title
      });
      axios.post('/api/user', {
        name: this.name,
        number: this.phone,
        list: this.items[this.selectedItem].title
      })
    }
  }
};
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(224, 223, 255, 0.8) 0%, rgba(236, 236, 255, 0.5) 100%);
  padding-bottom: 40px;
}
.wrappering{
  max-width: 350px;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
}
h2{
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
}
input{
  border:none ;
  border-radius:0;
  border-bottom: 2px solid #C4C4C4;
  transition: 0.5s;
  margin-bottom: 40px;
  background: transparent;
}
input:focus{
  border-bottom: 2px solid #2794D2;
  box-shadow: none;
}
.list{
  margin-bottom: 40px;
  width: 100%;
  background: white;
  font-weight: 300;
  border: 1px solid #DBDBDB;
  padding-left: 15px;
  padding-top: 12px;
  padding-bottom: 11px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  line-height: 0px;
}
.list i{
  color: #2794D2;
}
button:focus{
  outline: none;
  border: 1px solid #DBDBDB;
}
.submit{
  display: block;
  margin: auto;
  font-weight: 300;
  padding-left: 40px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 40px;
  background: #2824EA;
  color: #fff;
  border:none;
  border-radius:10em;
  cursor: pointer;
}
.position{
  position: relative;
}
.position .list-parent{
  position: absolute;
  right: -158px;
  top: -86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 15;
}
.position .list-parent .list-item{
  padding: 15px 35px 11px 15px;
  background: white;
  border: 1px solid #DBDBDB;
  cursor: pointer;
  transition: 0.5s;
}
.position .list-parent .list-item:first-child{
 opacity: 0;
}
.position .list-parent .list-item:hover{
  background: #2794D2;
  color: white;
}
@media(max-width:845px){
  .position .list-parent{
    right: 0;
    top: -235px;
}
}
</style>