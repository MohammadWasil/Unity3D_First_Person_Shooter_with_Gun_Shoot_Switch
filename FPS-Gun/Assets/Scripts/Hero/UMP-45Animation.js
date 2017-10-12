#pragma strict

private var animator : Animator ;
private var reloadSample : boolean = false ;

function Start () 
{
	animator = GetComponent.<Animator>() ;
}

function Update () 
{
	if(Input.GetButtonDown("Fire1"))
	{
		animator.SetBool("draw", false) ;
		animator.SetBool("reload", false) ;
		animator.SetBool("idle", false ) ;
		animator.SetBool("fire", true) ;
	}
	else
	{
		animator.SetBool("idle", true) ;
	}

	if(Input.GetButtonDown("Fire2"))
	{
		animator.SetBool("reload", true) ;
	}

	if(Input.GetAxis("Vertical"))
	{
		animator.SetBool("run", true) ;
	}
	else
	{
		animator.SetBool("run", false) ;
	}

	if(Input.GetKey(KeyCode.Q))
	{
		animator.SetBool("draw", true) ;
		animator.SetBool("next", true) ;
	}

}