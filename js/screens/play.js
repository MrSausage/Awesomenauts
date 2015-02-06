game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

		me.levelDirector.loadLevel("level01");

		var player = me.pool.pull("player", 0 ,420, {});
		me.game.world.addChild(player, 5);

		var gamemanager = me.pool.pull("GameManager", 0, 0, {});
		me.game.world.addChild(gamemanager, 0);
		//sets right key to move player right
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		//sets left key to move player left
		me.input.bindKey(me.input.KEY.LEFT, "left");
		//sets space bar to make player jump
		me.input.bindKey(me.input.KEY.SPACE, "jump");
		//sets A key to attack
		me.input.bindKey(me.input.KEY.A, "attack");

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
