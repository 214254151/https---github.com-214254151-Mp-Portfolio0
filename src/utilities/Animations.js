
export default class Animations{
    static animations = new Animations();

    fadeInScreen = (scree_name)=>{
        let screen = document.getElementById(scree_name);
        if(!scree_name || !screen)
            return;

        screen.style.opacity="5";
        screen.style.transform="translateY(1px)"
    }
    
}