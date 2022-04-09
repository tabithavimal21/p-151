AFRAME.registerComponent('car',{
    schema:{
        moveX:{type:'number', default:2}
    },
    tick:function(){
        this.data.moveX=this.data.moveX
        var pos=this.el.getAttribute("position")
        pos.x=this.data.moveX
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})