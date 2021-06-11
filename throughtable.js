
// relationship - party -> peergroup  through peergroupparty alias as groupmember
party.belongsToMany(peergroup, {
  through: peergroupparty,
  as: "groupmember",
});
peergroup.belongsToMany(party, {
  through: peergroupparty,
  as: "groupmember",
});

// query to code peergroup with include party and peergroupparty
    await models.peergroup.findOne({
      where: {
          id: 17
      },
      include: [{
        model: models.party,
          attributes: ['id','email'],
          as: "groupmember",
          through: {
            attributes: ['partyId'],
          },
          required: true, // don't know what for this option is, it doesn't make SQL string any better
      }],
      
  })
  .then(users => {
    console.log(users);
  })
  