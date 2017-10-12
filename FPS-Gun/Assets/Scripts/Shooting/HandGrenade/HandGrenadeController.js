#pragma strict

public var grenade : Rigidbody ;
public var throwPower : float = 150 ;

public var grenadeAmount : int = 5 ;

//Displaying the Ammunition.
public var grenadeOn : GameObject ;			//Amount of grenade already available ~~ grenadeAmount  -Display
public var handGrenadeBomb : boolean = false ;

private var waitThrow : boolean = false ; 

public var heroAnimation : HeroAniamtion ;
public var heroAnimation_ak47 : HeroAnimation_AK47 ;
public var heroAnimationUMP45 : HeroAnimationUMP_45 ;
public var heroAnimationHandGrenade : HeroAnimationHandGrenade ;


function Start () 
{
	heroAnimation = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAniamtion>() ;
	heroAnimation_ak47 = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimation_AK47>() ;
	heroAnimationUMP45 = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimationUMP_45>() ;
	heroAnimationHandGrenade = GameObject.Find("FirstPerson_Hand").GetComponent.<HeroAnimationHandGrenade>() ;

}

function Update () 
{

	if(this.gameObject.activeSelf)
	{
		handGrenadeBomb = true ;
		heroAnimation.enabled = false ;
		heroAnimation_ak47.enabled = false ;
		heroAnimationUMP45.enabled = false ;
		heroAnimationHandGrenade.enabled = true ;

	}
	else
	{
		handGrenadeBomb = false ;
		heroAnimationHandGrenade.enabled = false ;
	}

	grenadeOn.GetComponent.<Text>().text = " " + grenadeAmount ;


		if( grenadeAmount > 0)
		{
			if(Input.GetButtonDown("Fire1"))
			{
				//animator.SetBool("fire", true) ;

				StartCoroutine(waitFunction(2.3f) ) ;
			}
			waitThrow = false ;
		}
		else
		{
			//nothing!!! poor guy!
		}
	

}

function waitFunction(waitTime : float)
{
	yield WaitForSeconds(waitTime) ;

	grenadeAmount -= 1 ;
	grenadeOn.GetComponent.<Text>().text = " " + grenadeAmount ;
		
	var clone : Rigidbody ;
	clone = Instantiate(grenade, transform.position, transform.rotation) ;
	clone.velocity = transform.TransformDirection(Vector3.forward * throwPower)	 ;
}