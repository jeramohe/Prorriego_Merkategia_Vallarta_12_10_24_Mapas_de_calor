var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Universidades_2 = new ol.format.GeoJSON();
var features_Universidades_2 = format_Universidades_2.readFeatures(json_Universidades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universidades_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universidades_2.addFeatures(features_Universidades_2);
var lyr_Universidades_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Universidades_2, 
                radius: 7 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
                title: 'Universidades '
            });
var format_Hoteles_3 = new ol.format.GeoJSON();
var features_Hoteles_3 = format_Hoteles_3.readFeatures(json_Hoteles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_3.addFeatures(features_Hoteles_3);
var lyr_Hoteles_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hoteles_3, 
                radius: 5 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles '
            });
var format_Equipoderiegoagrcola_4 = new ol.format.GeoJSON();
var features_Equipoderiegoagrcola_4 = format_Equipoderiegoagrcola_4.readFeatures(json_Equipoderiegoagrcola_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipoderiegoagrcola_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipoderiegoagrcola_4.addFeatures(features_Equipoderiegoagrcola_4);
var lyr_Equipoderiegoagrcola_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Equipoderiegoagrcola_4, 
                radius: 7 * 2,
                gradient: ['#2b83ba', '#abdda4', '#ffffbf', '#fdae61', '#d7191c'],
                blur: 15,
                shadow: 250,
                title: 'Equipo de riego agrícola '
            });
var format_Equipoderiego_5 = new ol.format.GeoJSON();
var features_Equipoderiego_5 = format_Equipoderiego_5.readFeatures(json_Equipoderiego_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipoderiego_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipoderiego_5.addFeatures(features_Equipoderiego_5);
var lyr_Equipoderiego_5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Equipoderiego_5, 
                radius: 7 * 2,
                gradient: ['#edf8fb', '#b3cde3', '#8c96c6', '#8856a7', '#810f7c'],
                blur: 15,
                shadow: 250,
                title: 'Equipo de riego '
            });
var format_Desarrolladores_6 = new ol.format.GeoJSON();
var features_Desarrolladores_6 = format_Desarrolladores_6.readFeatures(json_Desarrolladores_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desarrolladores_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desarrolladores_6.addFeatures(features_Desarrolladores_6);
var lyr_Desarrolladores_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Desarrolladores_6, 
                radius: 5 * 2,
                gradient: ['#fafafa', '#050505'],
                blur: 15,
                shadow: 250,
                title: 'Desarrolladores '
            });
var format_Condominiosycotos_7 = new ol.format.GeoJSON();
var features_Condominiosycotos_7 = format_Condominiosycotos_7.readFeatures(json_Condominiosycotos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Condominiosycotos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Condominiosycotos_7.addFeatures(features_Condominiosycotos_7);
var lyr_Condominiosycotos_7 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Condominiosycotos_7, 
                radius: 5 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
                title: 'Condominios y cotos '
            });
var format_Contratistas_8 = new ol.format.GeoJSON();
var features_Contratistas_8 = format_Contratistas_8.readFeatures(json_Contratistas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_8.addFeatures(features_Contratistas_8);
var lyr_Contratistas_8 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Contratistas_8, 
                radius: 5 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'Contratistas '
            });
var format_Clubesyparques_9 = new ol.format.GeoJSON();
var features_Clubesyparques_9 = format_Clubesyparques_9.readFeatures(json_Clubesyparques_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubesyparques_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubesyparques_9.addFeatures(features_Clubesyparques_9);
var lyr_Clubesyparques_9 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Clubesyparques_9, 
                radius: 5 * 2,
                gradient: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
                blur: 15,
                shadow: 250,
                title: 'Clubes y parques '
            });
var format_CamposdeGolf_10 = new ol.format.GeoJSON();
var features_CamposdeGolf_10 = format_CamposdeGolf_10.readFeatures(json_CamposdeGolf_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CamposdeGolf_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CamposdeGolf_10.addFeatures(features_CamposdeGolf_10);
var lyr_CamposdeGolf_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_CamposdeGolf_10, 
                radius: 5 * 2,
                gradient: ['#fdfcf6', '#f1e51d', '#e5e419', '#d8e219', '#cae11f', '#bddf26', '#b0dd2f', '#a2da37', '#95d840', '#89d548', '#7cd250', '#70cf57', '#65cb5e', '#5ac864', '#50c46a', '#46c06f', '#3dbc74', '#35b779', '#2eb37c', '#28ae80', '#24aa83', '#21a585', '#1fa188', '#1e9c89', '#1f978b', '#20928c', '#218e8d', '#23898e', '#25848e', '#27808e', '#297b8e', '#2a768e', '#2c718e', '#2e6d8e', '#31688e', '#33638d', '#355e8d', '#38598c', '#3a538b', '#3d4e8a', '#3f4889', '#414287', '#433d84', '#453781', '#46307e', '#472a7a', '#482475', '#481d6f', '#481769', '#471063', '#46085c', '#440154', '#440154'],
                blur: 15,
                shadow: 250,
                title: 'Campos de Golf '
            });
var format_Cementerio_11 = new ol.format.GeoJSON();
var features_Cementerio_11 = format_Cementerio_11.readFeatures(json_Cementerio_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cementerio_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cementerio_11.addFeatures(features_Cementerio_11);
var lyr_Cementerio_11 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Cementerio_11, 
                radius: 5 * 2,
                gradient: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
                blur: 15,
                shadow: 250,
                title: 'Cementerio '
            });
var format_Arquitecturaypaisajeurbano_12 = new ol.format.GeoJSON();
var features_Arquitecturaypaisajeurbano_12 = format_Arquitecturaypaisajeurbano_12.readFeatures(json_Arquitecturaypaisajeurbano_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arquitecturaypaisajeurbano_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arquitecturaypaisajeurbano_12.addFeatures(features_Arquitecturaypaisajeurbano_12);
var lyr_Arquitecturaypaisajeurbano_12 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Arquitecturaypaisajeurbano_12, 
                radius: 5 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'Arquitectura y paisaje urbano'
            });
var format_Administracindebienesraces_13 = new ol.format.GeoJSON();
var features_Administracindebienesraces_13 = format_Administracindebienesraces_13.readFeatures(json_Administracindebienesraces_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administracindebienesraces_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administracindebienesraces_13.addFeatures(features_Administracindebienesraces_13);
var lyr_Administracindebienesraces_13 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Administracindebienesraces_13, 
                radius: 4 * 2,
                gradient: ['#fcffa4', '#f5f992', '#f2f27d', '#f2ea69', '#f4e156', '#f6d746', '#f8cd37', '#fac42a', '#fbba1f', '#fcb014', '#fca60c', '#fb9d07', '#fa9407', '#f98b0b', '#f78212', '#f47918', '#f1711f', '#ed6925', '#e9612b', '#e45a31', '#df5337', '#d94d3d', '#d34743', '#cc4248', '#c63d4d', '#bf3952', '#b73557', '#b0315b', '#a82e5f', '#a02a63', '#982766', '#902568', '#88226a', '#801f6c', '#781c6d', '#71196e', '#69166e', '#61136e', '#59106e', '#510e6c', '#490b6a', '#400a67', '#380962', '#2f0a5b', '#260c51', '#1e0c45', '#160b39', '#10092d', '#0a0722', '#050417', '#02020c', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'Administración de bienes raíces'
            });
var group_Mapasdecalor = new ol.layer.Group({
                                layers: [lyr_Universidades_2,lyr_Hoteles_3,lyr_Equipoderiegoagrcola_4,lyr_Equipoderiego_5,lyr_Desarrolladores_6,lyr_Condominiosycotos_7,lyr_Contratistas_8,lyr_Clubesyparques_9,lyr_CamposdeGolf_10,lyr_Cementerio_11,lyr_Arquitecturaypaisajeurbano_12,lyr_Administracindebienesraces_13,],
                                fold: "open",
                                title: "Mapas de calor"});
var group_MapaPuertoVallarta = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa Puerto Vallarta"});
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "group1"});
var group_Mapa_Temporal_Vallarta = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Mapa_Temporal_Vallarta"});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_Universidades_2.setVisible(false);lyr_Hoteles_3.setVisible(false);lyr_Equipoderiegoagrcola_4.setVisible(false);lyr_Equipoderiego_5.setVisible(false);lyr_Desarrolladores_6.setVisible(false);lyr_Condominiosycotos_7.setVisible(false);lyr_Contratistas_8.setVisible(false);lyr_Clubesyparques_9.setVisible(false);lyr_CamposdeGolf_10.setVisible(true);lyr_Cementerio_11.setVisible(false);lyr_Arquitecturaypaisajeurbano_12.setVisible(false);lyr_Administracindebienesraces_13.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,group_Mapasdecalor];
