class Sword{
    constructor(type, damage){
        this._type = type
        this._damage = damage
    }

    get damage(){
        return this._damage
    }
    set damage(newDamage){
        return this._damage = newDamage
    }

    attack(){

    }
}


class WoodSword extends Sword{
    constructor(){
        super("wood", 4)
    }

        attack(){
            return this.damage
        }
}

class NetheriteSword extends Sword{
    constructor(){
        super("netherite", 13)
    }

    attack(critic){
        if(critic < 20){
        alertify.success('Hit an critical attack');
            return this._damage + 2

        }
        else{
            return this._damage
        }
    }
}


class DiamonSword extends Sword{
    constructor(){
        super("Diamon", 9)

    }

    attack(critic){
        if(critic <= 30){
            returnalertify.success('Hit an critical attack');
            return this._damage+12
        }
        else{
            return  this._damage
        }
    }
}

class HostileMod{
    constructor(name, life){
        this._name = name 
        this._life = life
    }

    get life(){
        return this._life
    }

    set life(newLife){
        return this._life = newLife
    }

    doingTheAttack(_damage){

       

        
        return this._life - _damage
       

    }
}

let zombie = new HostileMod("Zombie", 50)
let woodSword = new WoodSword()
let netheriteSword = new NetheriteSword()
let diamonSword = new DiamonSword()

document.getElementById('attackButton').addEventListener('click', function () {
    document.querySelector('.sword').style.transform = 'rotate(-45deg)';
    let result = document.getElementById('resultado')
    let critic = critico()
    let actual = zombie.doingTheAttack(netheriteSword.attack(critic))
    console.log(actual)
    zombie.Vida = actual
    result.innerHTML = `El ${zombie._name} tiene ${zombie.Vida} de vida.<br>`
    if(zombie.Vida <= 0 ) {
      alert("Has derrotado al Zombie")
      result.innerHTML = `El ${zombie._name} tiene 0 de vida.<br>`
    }
  
    setTimeout(function () {
      document.querySelector('.sword').style.transform = 'rotate(0deg)';
    }, 500);
    
  });

  
  const critico = () => {
    
    return Math.floor(Math.random() * 101);
};