// Hands with Makarov.

#pragma strict

private var animator : Animator ;
//public var anim_Makarov : Animator ;
//instance for Makarov
public var makarovPistol : GunDamage ;

function Start () 
{
	animator = GetComponent.<Animator>() ;
	//anim_Makarov = GameObject.Find("WeaponHolder").GetComponentInChildren.<Animator>() ;
	makarovPistol = GetComponentInChildren.<GunDamage>() ;
	animator.SetBool("Makarov", true) ;
}

function Update () 
{
	//Makarov
	//if(makarovPistol.makarov == true)
	//{
		animator.SetBool("draw", false ) ; 
		if(makarovPistol.bullet > 0)
		{
			if(Input.GetButtonDown("Fire1"))
			{
				animator.SetBool("reload", false) ;
				animator.SetBool("draw", false) ;
				animator.SetBool("idle", false ) ;
				animator.SetBool("fire", true) ;
				animator.SetBool("next", false) ;
			}
			else
			{
				animator.SetBool("idle", true ) ;
			}

			//Reload
			//if(  Input.GetButtonDown("Fire2") )
			//{				
				//Debug.Log("fire2 is pressed") ;
				if(makarovPistol.bullet <= 4 )
				{
					
					if(makarovPistol.load <= 0)
					{
					}
					else
					{
						//Debug.Log("2") ;
						if( Input.GetButtonDown("Fire2")  )
						{

						//if( makarovPistol.bullet )
						//{
							
							//if( Input.GetButtonDown("Fire2")  )
							//{
								animator.SetBool("reload", true) ;
							//}
						//}
						}
					}
				}
			//}

		}
		else
		{
			if(Input.GetButtonDown("Fire1"))
			{
				animator.SetBool("idle", true) ;
			}

			if(Input.GetButtonDown("Fire2"))
			{
				Debug.Log("bullets zero") ;
				if(makarovPistol.load <= 0)
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
		}

		if( (Input.GetKey(KeyCode.Q) ) || (Input.GetAxis("Mouse ScrollWheel") > 0f) )
		{
			Debug.Log("is this line printing") ;
			animator.SetBool("Makarov", false) ;
			animator.SetBool("draw", true ) ; 
			animator.SetBool("AK-47", true) ;
			animator.SetBool("fire", false) ;
			animator.SetBool("next", true) ;
			animator.SetBool("reload", false) ;

		}
	//}

}
