using UnityEngine;
using System.Collections;

public class GrenadeAccept : MonoBehaviour {

	public bool grenadeAccept = false;
	public GameObject HandGrenade ;

	[HideInInspector]
	public GameObject realGrenade ;

	// Use this for initialization
	void Start () 
	{
		HandGrenade.SetActive(false) ;
		realGrenade = HandGrenade ;
	}

	// Update is called once per frame
	void Update () {

	}

	public void OnTriggerEnter(Collider col)
	{
		if(col.gameObject.tag == "Player")
		{
			//add it to the weapon array
			HandGrenade.SetActive(true) ;
			grenadeAccept = true ;
			Destroy(gameObject) ;
		}
	}

}