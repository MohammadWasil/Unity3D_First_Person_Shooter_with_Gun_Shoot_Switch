//Bullets to pick up.

#pragma strict

private var GunDamage : GunDamage3 ;

static var bulletInc : int ;
static var loadInc : int ;

static var bulletJs : boolean ;
static var loadJs : boolean ;

function Start () 
{
	GunDamage = GameObject.Find("UMP-45").GetComponent.<GunDamage3>() ;


	bulletJs = false ;
	loadJs = false ;
}

function OnTriggerEnter(Col : Collider)
{

		if(Col.gameObject.tag == "Player")
		{

			if(GunDamage.bullet == 0 )
			{
				GunDamage.bullet += 4 ;
				bulletJs = true ;
			}
			else
			{
				GunDamage.load += 4 ;
				loadJs = true ;
			}
					
		}
		bulletInc = GunDamage.bullet ;
		loadInc = GunDamage.load ;
		bulletJs = false ;
		loadJs = false ;

}