Vue.component('modalbootstrap', {
  template: //html
    `
    <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
       <slot name="header"></slot>
        <button type="button" class="close" data-dismiss="modal" @click="currentComponent ('cerrar')" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot name ="default"></slot>
        <keep-alive>
        <component v-bind is "currentComponent"></component:>
    </keep-alive>
      </div>
      <div class="modal-footer">
      <slot name="footer"></slot>
        
      </div>
    </div>
  </div>
</div>

    </div>

    
    `,
    data (){
      return{
          currentComponent :"cerrar"
      }
  },

});
