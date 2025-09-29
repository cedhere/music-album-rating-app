module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: {
                    args: [0, 7500],
                    msg: 'Comments must be 7,500 characters or fewer'
                }
            }
        }
    });
        
    return Comments
};