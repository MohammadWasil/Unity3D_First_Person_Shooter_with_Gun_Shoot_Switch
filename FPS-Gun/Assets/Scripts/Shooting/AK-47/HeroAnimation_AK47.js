#pragma strict

//instance for AK-47
public var ak47Gun : GunDamage2 ;
private var animator : Animator ;
private var gunChange : boolean = false ;

function Start () 
{
	animator = GetComponent.<Animator>() ;
	ak47Gun = GetComponentInChildren.<GunDamage2>() ;
}

function Update () {

	
		animator.SetBool("draw", false ) ;
		if(ak47Gun.bullet > 0 )
		{
			if(Input.GetButtonDown("Fire1"))
			{
				animator.SetBool("reload", false) ;
				animator.SetBool("draw", false) ;
				animator.SetBool("idle", false ) ;
				animator.SetBool("fire", true) ;
				//animator.SetBool("next", false) ;
			}
			else
			{
				animator.SetBool("idle", true ) ;
			}
		
			//Reload
			/*if( Input.GetButtonDown("Fire2") )
			{
				if(ak47Gun.reload == true)
				{
					animator.SetBool("reload", true) ;
				}
			ak47Gun.reload = false ;
			}
			*/
		}
		else
		{
			Debug.Log("else statement") ;
			if(Input.GetButtonDown("Fire1"))
			{
				animator.SetBool("idle", true) ;
			}

		}
		if( (Input.GetKey(KeyCode.Q) ) || (Input.GetAxis("Mouse ScrollWheel") > 0f) )
		{
			animator.SetBool("draw", true ) ; 
			animator.SetBool("fire", false) ;
			//animator.SetBool("next", true) ;
			//animator.SetBool("reload", false) ;
			//animator.SetBool("UMP-45", true) ;
			gunChange = true ;
			if(gunChange == true)
			{
				animator.SetBool("UMP-45", true) ;
			}
			gunChange = false ;
		}
			
		if(Input.GetAxis("Vertical"))
		{
			animator.SetBool("run", true) ;
		}
		else
		{
			animator.SetBool("run", false) ;
		}

		if( Input.GetButtonDown("Fire2") )
		{
			if(ak47Gun.reload == true)
			{
				animator.SetBool("reload", true) ;
			}
		ak47Gun.reload = false ;
		}
}