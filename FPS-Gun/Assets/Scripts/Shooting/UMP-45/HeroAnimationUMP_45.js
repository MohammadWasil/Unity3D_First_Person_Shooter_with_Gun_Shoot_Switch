// Hands with Makarov.

#pragma strict

private var animator : Animator ;

//instance for Makarov
private var UMP : GunDamage3 ;

function Start () 
{
	animator = GetComponent.<Animator>() ;
	UMP = GetComponentInChildren.<GunDamage3>() ;
}

function Update () 
{
	
	animator.SetBool("draw", false ) ;
	//animator.SetBool("reload", false) ;
		if(UMP.bullet > 0)
		{
			if(Input.GetButtonDown("Fire1"))
			{
				animator.SetBool("reload", false) ;
				animator.SetBool("draw", false) ;
				animator.SetBool("idle", false ) ;
				animator.SetBool("fire", true) ;
			}
			else
			{
				animator.SetBool("idle", true ) ;
			}
		
			//Reload
			//if(UMP.bullet <= 4)
			//{
			//	if(UMP.load <= 0)
			//	{
			//	}
			//	else
			//	{
			//		if(UMP.bullet)
			//		{
					//	if( Input.GetButtonDown("Fire2")  )
					//	{
					//		if(UMP.reload == true)
					//		{
					//			animator.SetBool("reload", true) ;
					//		}
					//	UMP.reload = false ;
					//	}
			//		}
			//	}
			//}

			if(UMP.reload == false )
			{
				animator.SetBool("reload", false) ;
			}

		}
	
		else
		{
			if(Input.GetButtonDown("Fire1"))
			{
				animator.SetBool("idle", true) ;
			}

			if(UMP.reload == false )
			{
				animator.SetBool("reload", false) ;
			}

			/*if(Input.GetButtonDown("Fire2"))
			{
				if(UMP.load <= 0)
				{
				}
				else
				{
					//if(makarovPistol.load >= 4)
					//{
						animator.SetBool("reload", true) ;
					//}
					//else
					//{
					//	animator.SetBool("reload", true) ;
					//}
				}
			}
			*/
		}	
	

		if(Input.GetKey(KeyCode.Q) || (Input.GetAxis("Mouse ScrollWheel") > 0f))
		{
			animator.SetBool("draw", true ) ; 
			animator.SetBool("next", true) ;
			animator.SetBool("fire", false) ;
			animator.SetBool("HandGrenade", true) ;
		}

		if(Input.GetAxis("Vertical"))
		{
			animator.SetBool("run", true) ;
		}
		else
		{
			animator.SetBool("run", false) ;
		}

		if( Input.GetButtonDown("Fire2")  )
		{
			if(UMP.reload == true)
			{
				animator.SetBool("reload", true) ;
			}
		UMP.reload = false ;
		}



	

}
