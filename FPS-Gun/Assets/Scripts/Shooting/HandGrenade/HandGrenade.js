#pragma strict
public var explosionRadius : float = 5f  ;
public var explosionForce : float = 10f ;
public var upwardModifier : float = 1.0f ;
public var explosionTimeDelay : float = 3f ;
public var damagePoint : int = 24 ;

private var enemHealth : Enemy ;

private var rb : Rigidbody ;

function Start () 
{
	enemHealth = GameObject.FindWithTag("Enemy").GetComponent.<Enemy>() ;
	
	//enemHealth = GameObject.FindWithTag("Enemy").GetComponent.<EnemyHealth>() ;
	yield WaitForSeconds(explosionTimeDelay) ;
 	var explosionPosition : Vector3 = transform.position ;

 	var colliders : Collider[] = Physics.OverlapSphere( explosionPosition, explosionRadius ) ;

 	for( var hit : Collider in colliders)
 	{
 		rb = hit.GetComponent.<Rigidbody>() ;
 		if( rb != null)
 		{
 			rb.AddExplosionForce(explosionForce, explosionPosition, explosionRadius, upwardModifier) ;
 			Destroy(gameObject);
 			enemHealth.DamageHealth(damagePoint); 
 		}
 	}

}

function Update () 
{
	
}
