#pragma strict

private var animator : Animator ;

//Instance variable for Hand Grenade
private var handGrenade : HandGrenadeController ;

function Start () 
{
	animator = GetComponent.<Animator>() ;
	handGrenade = GetComponentInChildren.<HandGrenadeController>() ;
	animator.SetBool("fire", false) ;
}
	
function Update () 
{
	animator.SetBool("draw", false ) ;
		if( handGrenade.grenadeAmount > 0)
		{
			if(Input.GetButtonDown("Fire1"))
			{
				animator.SetBool("idle", false) ;
				animator.SetBool("draw", false) ;
				animator.SetBool("fire", true) ;
				animator.SetBool("next", false) ;
			}
			else
			{
				animator.SetBool("idle", true) ;
			}
		}

		if(Input.GetKey(KeyCode.Q) || (Input.GetAxis("Mouse ScrollWheel") > 0f))
		{
			animator.SetBool("draw", true ) ; 
			animator.SetBool("next", true) ;
			animator.SetBool("Makarov", true) ;
		}

		//else if( handGrenade.grenadeAmount == 0 )
		//{
		//	animator.SetBool("idle", true) ;	
			//animator.SetBool("end", true) ;
		//	animator.SetBool("next", true) ;
		//}
}