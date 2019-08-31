<template>
  <div class="card">
    <div class="card-image">
      <slot name="image"></slot>
    </div>
    <div class="card-header">
      <slot name="header">
        <h4 class="card-title">{{title}}</h4>
        <p class="card-category">{{subTitle}}</p>
      </slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <slot name="raw-content"></slot>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: {
      type: String,
      description: "Card title"
    },
    subTitle: {
      type: String,
      description: "Card subtitle"
    },
    type: {
      type: String,
      description: "Card type (e.g primary/danger etc)"
    },
    headerClasses: {
      type: [String, Object, Array],
      description: "Card header css classes"
    },
    bodyClasses: {
      type: [String, Object, Array],
      description: "Card body css classes"
    },
    footerClasses: {
      type: [String, Object, Array],
      description: "Card footer css classes"
    }
  }
};
</script>

<style>
.card{
  width: 262px;
  height: 120px;
  /* overflow: hidden; */
}
.card-image{
  /* width: 100%;
  height: 100%; */
  font-size: 18px;
  justify-content: start;
  align-items: center;
}
.card-body{

}
</style>
