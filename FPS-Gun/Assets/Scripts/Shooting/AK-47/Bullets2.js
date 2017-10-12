#pragma strict

private var GunDamage2 : GunDamage2 ;

static var bulletInc : int ;
static var loadInc : int ;

static var bulletJs : boolean ;
static var loadJs : boolean ;

function Start () 
{
	GunDamage2 = GameObject.Find("AK-47").GetComponent.<GunDamage2>() ;


	bulletJs = false ;
	loadJs = false ;
}

function OnTriggerEnter(Col : Collider)
{

		if(Col.gameObject.tag == "Player")
		{

			if(GunDamage2.bullet == 0 )
			{
				GunDamage2.bullet += 15 ;
				bulletJs = true ;
			}
			else
			{
				GunDamage2.load += 15 ;
				loadJs = true ;
			}
					
		}
		bulletInc = GunDamage2.bullet ;
		loadInc = GunDamage2.load ;
		bulletJs = false ;
		loadJs = false ;

}