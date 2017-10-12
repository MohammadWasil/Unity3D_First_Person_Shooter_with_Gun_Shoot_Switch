// UMP-45 Gun
//  bullets in gun.
//  bullets in pickup.

#pragma strict
import UnityEngine.UI ;

var allowedRange : float = 30 ;
var damagePoint : int = 10 ;
var calculatedDistance : float ;

private var animator : Animator ;
//boolean variable for shooting is going on
private var Shooting : boolean ;

//Bullet Count
static var bullet : int = 8 ;
static var load : int ;

//Bullet Appears
var bulletDisplay : GameObject ;
var loadDisplay : GameObject ;

//variable for Bullet.js
private var bulletBullets	: Bullets ;

//public var enemHealth : EnemyHealth ;
public var fpsCam : Camera ;

//variable for HeroAnimation script so that we can divide our work between different guns when switching.
public var ump : boolean = false ;
public var reload : boolean = false ;

public var heroAnimation : HeroAniamtion ;
public var heroAnimation_ak47 : HeroAnimation_AK47 ;
public var heroAnimationUMP45 : HeroAnimationUMP_45 ;
public var heroAnimationHandGrenade : HeroAnimationHandGrenade ;


function Start () 
{

	animator = GetComponent.<Animator>() ;
	Shooting = false ;
	bulletBullets = GameObject.Find("Bullets").GetComponent.<Bullets>() ;
	load = 0 ;

	heroAnimation = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAniamtion>() ;
	heroAnimation_ak47 = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimation_AK47>() ;
	heroAnimationUMP45 = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimationUMP_45>() ;
	heroAnimationHandGrenade = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimationHandGrenade>() ;

}

function Update () 
{
	// for Heroanimation as stated above.
	if(this.gameObject.activeSelf)
	{
		ump = true ;
		heroAnimation.enabled = false ;
		heroAnimation_ak47.enabled = false ;
		heroAnimationUMP45.enabled = true ;
		heroAnimationHandGrenade.enabled = false ;

	}
	else
	{
		ump = false ;
		//heroAnimation.enabled = false ;
		//heroAnimation_ak47.enabled = false ;
		heroAnimationUMP45.enabled = false ;
	}

	var fwd = fpsCam.transform.TransformDirection(Vector3.forward) ;
	var shotDistance : RaycastHit ;

	//animator.SetBool("", Shooting) ;

	//Bullet Display
	if(bulletBullets.bulletJs)
	{
	bullet += bulletBullets.bulletInc;
	}

	bulletDisplay.GetComponent.<Text>().text = " " + bullet	; 

	//Load Display
	if(bulletBullets.loadJs)
	{
		load = bulletBullets.loadInc + load ;

	}
	loadDisplay.GetComponent.<Text>().text = " " + load ;


	if(bullet > 0 )
	{
		if(Input.GetButtonDown("Fire1"))
		{
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
						//For Enemy!!!
						//function call, to the enemy to reduced health by 5.
						//shotDistance.transform.SendMessage("DamageHealth", damagePoint, SendMessageOptions.DontRequireReceiver ) ;

						var enemHealth : Enemy = shotDistance.transform.GetComponent.<Enemy>() ; 
						if(shotDistance.collider.gameObject.tag == "Enemy")
						{
							Debug.Log("Enemy kill") ;
							if(enemHealth != null)
							{
								enemHealth.DamageHealth(damagePoint) ;
							}
						}
				 	}
				}
			
		}

		else
		{
			//Shooting = false ;
			//animator.SetBool("fire", false) ;

			animator.SetBool("idle", true ) ;

			//damage = false ;
			//damage_Skeleton = false ; 
			//damage_Crawler = false ;

		}

		//Reloading when the hero have bullet >= 0
		if(Input.GetButtonDown("Fire2"))		//fire2 is for Reloading the gun.
		{

			//Animation for Reload.

			if(bullet <=4)
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
						bullet = 4 + bullet ;		//85
						load = load - 4 ;
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
				if(load >= 4)
				{
					bullet = 4 ;
					load = load - 4 ; 
				}
				else
				{
					bullet = load ;
					load = 0 ;
				}
			}
		}
	}

	if(Input.GetKey(KeyCode.Q) || (Input.GetAxis("Mouse ScrollWheel") > 0f))
	{
		animator.SetBool("draw", true ) ; 
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