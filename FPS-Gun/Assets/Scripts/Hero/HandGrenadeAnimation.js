#pragma strict

private var animator : Animator ;

public var handGrenadeThrow : GameObject ;
public var handGrenade : HandGrenadeController ;

function Start () 
{
	animator = GetComponent.<Animator>() ;
	//handGrenade = GetComponent.<HandGrenadeController>() ;
}

function Update () 
{
	if(handGrenade.grenadeAmount > 0)
	{
		if(Input.GetButtonDown("Fire1"))
		{
			animator.SetBool("idle", false) ;	
			animator.SetBool("fire", true ) ;
		}
		else
		{
			animator.SetBool("idle", true) ;
		}
	
		if(Input.GetKey(KeyCode.Q))
		{
			animator.SetBool("draw", true ) ; 
			animator.SetBool("next", true) ;
		}

		if(Input.GetKey(KeyCode.Q))
		{
			animator.SetBool("draw", true ) ; 
			animator.SetBool("next", true) ;
		}

	}

	else if(handGrenade.grenadeAmount == 0)
	{
		animator.SetBool("idle", true) ;
		animator.SetBool("end", true) ;
		animator.SetBool("next", true) ;
		waitFunction() ;
	}
}

function waitFunction()
{
	//yield WaitForSeconds(2) ;
	this.gameObject.SetActive(false) ;
}