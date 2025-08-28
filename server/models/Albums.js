module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("Album", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cover_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        // external references from future album database
        source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        source_id: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Album.associate = (models) => {
        Album.hasMany(models.Posts, {
            foreignKey: "album_id",
            onDelete: "CASCADE",
        });
    };
    
    return Album;

}