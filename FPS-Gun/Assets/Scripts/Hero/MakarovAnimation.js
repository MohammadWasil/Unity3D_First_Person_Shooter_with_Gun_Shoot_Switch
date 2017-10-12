#pragma strict

private var animator : Animator ;
private var makarov : GunDamage ;

function Start () 
{
	animator = GetComponent.<Animator>() ;
	makarov = GetComponent.<GunDamage>() ;
}

function Update () 
{
	if(makarov.bullet > 0)
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
	

		if(Input.GetButtonDown("Fire2"))
		{
			//if(makarov.reloadMakarov)
			//{
				animator.SetBool("reload", true) ;
			//}
			//makarov.reloadMakarov = false ;
		}

	}
	else
	{
		if(Input.GetButtonDown("Fire1"))
		{
			animator.SetBool("idle", true ) ;
		}

		if(Input.GetButtonDown("Fire2"))
		{
			if(makarov.load <= 0)
			{
			}
			else
			{
				//if(makarov.reloadMakarov)
				//{
					//if(makarov.load >= 4)
					//{
						animator.SetBool("reload", true) ;
					//}
					//else
					//{
					//	animator.SetBool("reload", true) ;
					//}
				//}
			}
			//makarov.reloadMakarov = false ;
		}
	}

	if(Input.GetKey(KeyCode.Q))
	{
		animator.SetBool("draw", true ) ; 
		animator.SetBool("next", true) ;
	}
}