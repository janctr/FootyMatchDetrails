define(['qlik', 'jquery', 'text!./style.css', 'text!./index.html'], function (
    qlik,
    $,
    cssContent,
    template
) {
    'use strict';
    $('<style>').html(cssContent).appendTo('head');

    function getCellText(layout, i) {
        const data = layout.qHyperCube.qDataPages[0].qMatrix[0][i].qText;

        return data;
    }

    function render(layout) {}

    return {
        template,
        initialProperties: {
            qHyperCubeDef: {
                qDimensions: [
                    { qDef: { qFieldDefs: ['home_player_X1'] } },
                    { qDef: { qFieldDefs: ['home_player_X2'] } },
                    { qDef: { qFieldDefs: ['home_player_X3'] } },
                    { qDef: { qFieldDefs: ['home_player_X4'] } },
                    { qDef: { qFieldDefs: ['home_player_X5'] } },
                    { qDef: { qFieldDefs: ['home_player_X6'] } },
                    { qDef: { qFieldDefs: ['home_player_X7'] } },
                    { qDef: { qFieldDefs: ['home_player_X8'] } },
                    { qDef: { qFieldDefs: ['home_player_X9'] } },
                    { qDef: { qFieldDefs: ['home_player_X10'] } },
                    { qDef: { qFieldDefs: ['home_player_X11'] } },
                    { qDef: { qFieldDefs: ['away_player_X1'] } },
                    { qDef: { qFieldDefs: ['away_player_X2'] } },
                    { qDef: { qFieldDefs: ['away_player_X3'] } },
                    { qDef: { qFieldDefs: ['away_player_X4'] } },
                    { qDef: { qFieldDefs: ['away_player_X5'] } },
                    { qDef: { qFieldDefs: ['away_player_X6'] } },
                    { qDef: { qFieldDefs: ['away_player_X7'] } },
                    { qDef: { qFieldDefs: ['away_player_X8'] } },
                    { qDef: { qFieldDefs: ['away_player_X9'] } },
                    { qDef: { qFieldDefs: ['away_player_X10'] } },
                    { qDef: { qFieldDefs: ['away_player_X11'] } },
                    { qDef: { qFieldDefs: ['home_player_Y1'] } },
                    { qDef: { qFieldDefs: ['home_player_Y2'] } },
                    { qDef: { qFieldDefs: ['home_player_Y3'] } },
                    { qDef: { qFieldDefs: ['home_player_Y4'] } },
                    { qDef: { qFieldDefs: ['home_player_Y5'] } },
                    { qDef: { qFieldDefs: ['home_player_Y6'] } },
                    { qDef: { qFieldDefs: ['home_player_Y7'] } },
                    { qDef: { qFieldDefs: ['home_player_Y8'] } },
                    { qDef: { qFieldDefs: ['home_player_Y9'] } },
                    { qDef: { qFieldDefs: ['home_player_Y10'] } },
                    { qDef: { qFieldDefs: ['home_player_Y11'] } },
                    { qDef: { qFieldDefs: ['away_player_Y1'] } },
                    { qDef: { qFieldDefs: ['away_player_Y2'] } },
                    { qDef: { qFieldDefs: ['away_player_Y3'] } },
                    { qDef: { qFieldDefs: ['away_player_Y4'] } },
                    { qDef: { qFieldDefs: ['away_player_Y5'] } },
                    { qDef: { qFieldDefs: ['away_player_Y6'] } },
                    { qDef: { qFieldDefs: ['away_player_Y7'] } },
                    { qDef: { qFieldDefs: ['away_player_Y8'] } },
                    { qDef: { qFieldDefs: ['away_player_Y9'] } },
                    { qDef: { qFieldDefs: ['away_player_Y10'] } },
                    { qDef: { qFieldDefs: ['away_player_Y11'] } },
                    { qDef: { qFieldDefs: ['home_player_1.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_2.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_3.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_4.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_5.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_6.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_7.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_8.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_9.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_10.long_name'] } },
                    { qDef: { qFieldDefs: ['home_player_11.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_1.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_2.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_3.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_4.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_5.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_6.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_7.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_8.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_9.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_10.long_name'] } },
                    { qDef: { qFieldDefs: ['away_player_11.long_name'] } },
                ],
                qMeasures: [],
                qInitialDataFetch: [
                    {
                        qWidth: 66,
                        qHeight: 1,
                    },
                ],
            },
        },
        definition: {
            type: 'items',
            component: 'accordion',
            items: {
                dimensions: {
                    uses: 'dimensions',
                    min: 0,
                },
                measures: {
                    uses: 'measures',
                    min: 0,
                },
                sorting: {
                    uses: 'sorting',
                },
                settings: {
                    uses: 'settings',
                    items: {
                        initFetchRows: {
                            ref: 'qHyperCubeDef.qInitialDataFetch.0.qHeight',
                            label: 'Initial fetch rows',
                            type: 'number',
                            defaultValue: 1,
                        },
                    },
                },
            },
        },
        support: {
            snapshot: true,
            export: true,
            exportData: true,
        },
        paint: function ($element, layout) {
            //setup scope.table
            if (!this.$scope.table) {
                this.$scope.table = qlik.table(this);
            }
            return qlik.Promise.resolve();
        },
        controller: [
            '$scope',
            function ($scope) {
                const layout = $scope.layout;
                console.log('layout: ', layout);
                console.log(layout.qHyperCube);

                const homeData = [];
                const awayData = [];

                for (let i = 0; i < 22; i++) {
                    const player = {
                        x: getCellText(layout, i),
                        y: getCellText(layout, i + 22),
                        playerName: getCellText(layout, i + 22 * 2),
                    };

                    i < 11 ? homeData.push(player) : awayData.push(player);
                }

                console.log('home data: ', homeData);
                console.log('away data: ', awayData);

                $scope.home = homeData;
                $scope.away = awayData;

                $scope.homeXMax = Math.max(...homeData.map((t) => t.x)) * 10;
                $scope.homeYMax = Math.max(...homeData.map((t) => t.y)) * 10;

                $scope.awayXMax = Math.max(...awayData.map((t) => t.x)) * 10;
                $scope.awayYMax = Math.max(...awayData.map((t) => t.y)) * 10;

                console.log('awayXMax: ', $scope.awayXMax);

                console.log(
                    't : ',
                    homeData.map((t) => Number(t.x))
                );

                $(document).ready(() => {
                    // render(layout);
                });
            },
        ],
    };
});
