module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'Users',
            //     key: 'id'
            // },
            onDelete: 'CASCADE', // if the user is deleted posts will be deleted too
            onUpdate: 'CASCADE'
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'Albums',
            //     key: 'id'
            // },
            onDelete: 'RESTRICT', // prevent deleting album if posts exist
            onUpdate: 'CASCADE'
        },
        rating: {
            type: DataTypes.DECIMAL (2, 1),
            allowNull: false,
            validate: {
                min: 0.5,
                max: 5.0,
                isHalfStep (value) {
                    const num = parseFloat(value);
                    if (num * 10 % 5 !== 0) {
                        throw new Error('Rating must be in 0.5 increments');
                    }
                }
            }
        },
        caption: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: {
                    args: [0, 10000],
                    msg: 'Caption must be 10,000 characters or fewer'
                }
            }
        }
    }, {
            indexes: [
                { fields: ['album_id', 'createdAt'] },
                { fields: ['user_id', 'album_id', 'createdAt'] } // for relisten lookups

            ]
        });
        
        Posts.associate = (models) => {
            Posts.hasMany(models.Comments, {
                onDelete: "CASCADE",
            });
        };
    return Posts
};