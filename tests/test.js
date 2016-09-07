QUnit.test( "DateUtils.parseTime", function(assert) {
  assert.ok(_.isEqual([13,1], DateUtils.parseTime("13:01")), "13:01");
  assert.ok(_.isEqual([14,2], DateUtils.parseTime("2:02pm")), "2:02pm");
  assert.ok(_.isEqual([16,3], DateUtils.parseTime("午後4:3")), "午後4:3");
  assert.ok(_.isEqual([17,0], DateUtils.parseTime("5pm")), "5pm");
  assert.ok(_.isEqual([17,1], DateUtils.parseTime("5:1pm")), "5:1pm");
  assert.ok(_.isEqual([18,0], DateUtils.parseTime("18時")), "18時");
  assert.ok(_.isEqual([19,20], DateUtils.parseTime("19 : 20")), "19 : 20");
  assert.ok(_.isEqual([20,0], DateUtils.parseTime("午後８")), "午後８");

  // 下記の様な書き方はサポートしない
  assert.ok(_.isEqual(null, DateUtils.parseTime("お昼")), "お昼");
});

