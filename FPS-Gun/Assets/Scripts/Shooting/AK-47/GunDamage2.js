// For AK-47
// 30 bullets in gun
// 15 bullets in pickUp.

#pragma strict
import UnityEngine.UI ;

var allowedRange : float = 20 ;
var damagePoint : int = 5 ;
var calculatedDistance : float ;

private var animator : Animator ;
private var Shooting : boolean ;

//Bullet Count
static var bullet : int = 30 ;
static var load : int ;

//Bullet Appears
var bulletDisplay : GameObject ;
var loadDisplay : GameObject ;

//variable for Bullet.js
private var bulletBullets2	: Bullets2 ;

//public var enemHealth : EnemyHealth ;
public var fpsCam : Camera ;

//variable for HeroAnimation script so that we can divide our work between different guns when switching.
public var ak47 : boolean = false ;
public var reload : boolean = false ;

public var heroAnimation : HeroAniamtion ;
public var heroAnimation_ak47 : HeroAnimation_AK47 ;
public var heroAnimationUMP45 : HeroAnimationUMP_45 ;
public var heroAnimationHandGrenade : HeroAnimationHandGrenade ;

function Start () 
{

	animator = GetComponent.<Animator>() ;
	Shooting = false ;
	bulletBullets2 = GameObject.Find("Bullets").GetComponent.<Bullets2>() ;
	load = 0 ;

	heroAnimation = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAniamtion>() ;
	heroAnimation_ak47 = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimation_AK47>() ;
	heroAnimationUMP45 = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimationUMP_45>() ;
	heroAnimationHandGrenade = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimationHandGrenade>() ;
	yield WaitForSeconds(3f);
}

function Update () 
{
	if(this.gameObject.activeSelf)
	{
		ak47 = true ;
		heroAnimation.enabled = false ;
		heroAnimation_ak47.enabled = true ;
		heroAnimationUMP45.enabled = false ;
		heroAnimationHandGrenade.enabled = false ;
		//animator.SetBool("next", false) ;

	}
	else
	{
		ak47 = false ;
		//heroAnimation.enabled = true ;
		heroAnimation_ak47.enabled = false ;

	}


	var fwd = fpsCam.transform.TransformDirection(Vector3.forward) ;
	var shotDistance : RaycastHit ;

	//anim.SetBool("Shooting", Shooting) ;

	//Bullet Display
	if(bulletBullets2.bulletJs)
	{
	bullet += bulletBullets2.bulletInc;
	}

	bulletDisplay.GetComponent.<Text>().text = " " + bullet	; 

	//Load Display
	if(bulletBullets2.loadJs)
	{
		load = bulletBullets2.loadInc + load ;

	}
	loadDisplay.GetComponent.<Text>().text = " " + load ;

	if(bullet > 0 )
	{
		if(Input.GetButtonDown("Fire1"))
		{
		Debug.Log("fire "+ Input.GetButtonDown("Fire1")) ;
			//GetComponent.<Animation>().Play() ;
			//Var fwd = transform.TransformDirection(Vector3.forward) ;
			//Var shotDistance : RaycastHit ;
				
			//Shooting = true ;

			animator.SetBool("reload", false) ;
			animator.SetBool("draw", false) ;
			animator.SetBool("idle", false ) ;
			animator.SetBool("fire", true) ;


			bullet -= 1 ;
			bulletDisplay.GetComponent.<Text>().text = " " + bullet	; 

				if(Physics.Raycast(fpsCam.transform.position, fwd, shotDistance) )
				{
					calculatedDistance = shotDistance.distance ;
												
					if( calculatedDistance < allowedRange	)
					{
						//function call, to the enemy to reduced health by 5.
						//shotDistance.transform.SendMessage("DamageHealth", damagePoint, SendMessageOptions.DontRequireReceiver ) ;

						var enemHealth : Enemy = shotDistance.transform.GetComponent.<Enemy>() ; 

						if(enemHealth != null)
						{
						enemHealth.DamageHealth(damagePoint) ;
						}
				 	}
				}
		}
		else
		{
			//Shooting = false ;
			animator.SetBool("idle", true ) ;
		}

		//Reloading
		if(Input.GetButtonDown("Fire2"))		//fire2 is for Reloading the gun.
		{

			//Animation for Reload.
			if(bullet <=15)
			{
				//right now, the player have 0 bullet loaded in the machine gun!
				//so, now we have to load it from the given bullets
				if(load <= 0)		//you are lucky!!! No Load, but some Bullet.
				{
					//nothing will happen, sorry, you'll die!!! and i have no regret!!! :P although you do have some bullets left, use it wisely, and make you're 
					//parents proud!
				}
				else
				{
					if(bullet)			// 35 bullet			load 50
					{
						animator.SetBool("reload", true) ;
						reload = true ;
						bullet = 15 + bullet ;		//85
						load = load - 15 ;
					}

				}
			}

		}

	}
	else			//bullet is now finished in the gun(bullet <= 0)
	{
		animator.SetBool("idle", true) ;
		//Stop firing, nothing happen!
		Shooting = false ;					//For Animator, SetBool!
		//Empty gun voice will be played!

		if(Input.GetButtonDown("Fire1"))
		{
			animator.SetBool("idle", true ) ;
		}

		if(Input.GetButtonDown("Fire2"))		//fire2 is for Reloading the gun.
		{
			//Animation fior reload.

			//right now, the player have 0 bullet loaded in the machine gun!
			//so, now we have to load it from the given bullets
			if(load <= 0)		//Seems that you're out of luck!!! No Load, No Bullet.
			{
				//nothing will happen, sorry, you'll die!!! and i have no regret!!! :P
			}
			else
			{
				animator.SetBool("reload", true) ;
				reload = true ; 
				if(load >= 15)
				{
					bullet = 15 ;
					load = load - 15 ; 
				}
				else
				{
					bullet = load ;
					load = 0 ;
				}
			}
		}
	}

	if( (Input.GetKey(KeyCode.Q) ) || (Input.GetAxis("Mouse ScrollWheel") > 0f) )
	{
		animator.SetBool("draw", true ) ; 
		animator.SetBool("fire", false) ;
		animator.SetBool("next", true) ;
	}
	if(Input.GetAxis("Vertical"))
	{
		animator.SetBool("run", true) ;
	}
	else
	{
		animator.SetBool("run", false) ;
	}

}

