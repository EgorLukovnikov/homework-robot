import { UnitModel } from './../shared/unit.model';

export class BulletModel extends UnitModel {

	fly(bullet){
		const dist = 0;

		let interval = setInterval(() => {
			dist++;
			bullet.view.left +=1;
			if ( dist > 200 ){
				bullet.view.opacity = 0;
				bullet.view.left = 162;
				clearInterval(interval);
			}
		}, 3);
	}

}