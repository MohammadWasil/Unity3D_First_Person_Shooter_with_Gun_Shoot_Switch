#pragma strict

public var gunDamage : GunDamage ;
public var gunDamage2 : GunDamage2 ;

public var heroAnimation : HeroAniamtion ;
public var heroAnimation_ak47 : HeroAnimation_AK47 ;

function Start () 
{
	gunDamage = GameObject.Find("Makarov").GetComponent.<GunDamage>() ;
	gunDamage2 = GameObject.Find("AK-47").GetComponent.<GunDamage2>() ;
	heroAnimation = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAniamtion>() ;
	heroAnimation_ak47 = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimation_AK47>() ;

}

function Update () 
{
	if(gunDamage.makarov == true)
	{
		heroAnimation.enabled = true ;
		heroAnimation_ak47.enabled = false ;
	}
	else if(gunDamage2.ak47 == true)
	{
		heroAnimation.enabled = false ;
		heroAnimation_ak47.enabled = true ;
	}
}