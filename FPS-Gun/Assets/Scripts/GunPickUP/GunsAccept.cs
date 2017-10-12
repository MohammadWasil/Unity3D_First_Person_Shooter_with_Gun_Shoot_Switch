using UnityEngine;
using System.Collections;

public class GunsAccept : MonoBehaviour {

	public bool gunAccept = false;
	public GameObject MachineGun01 ;

	[HideInInspector]
	public GameObject realGun ;
	[HideInInspector]
	public GunSwitch gunSwitch ;


	// Use this for initialization
	void Start () 
	{
		MachineGun01.SetActive(false) ;
		realGun = MachineGun01 ;
	}

	// Update is called once per frame
	void Update () {

	}

	public void OnTriggerEnter(Collider col)
	{
		if(col.gameObject.tag == "Player")
		{
			//add it to the weapon array
			MachineGun01.SetActive(true) ;
			gunAccept = true ;
			Destroy(gameObject) ;

		}
	}

}