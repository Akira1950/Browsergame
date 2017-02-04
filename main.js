enchant();
var plx = 26;
var ply = 21;
// 配列でマップデータを用意する
var mapArray = [
    [5, 11, 10, 11, 10, 11, 10, 11, 3, 11, 10, 11, 10, 11, 10, 11, 3, 11, 10, 11, 10, 11, 10, 11, 7, 11, 36, 64, 65],
    [12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 36, 38, 39],
    [10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 36, 36, 36],
    [12, 13, 31, 48, 49, 48, 49, 31, 12, 13, 31, 50, 51, 50, 51, 31, 12, 13, 31, 52, 53, 52, 53, 31, 12, 13, 36, 36, 36],
    [10, 11, 31, 56, 57, 56, 57, 31, 10, 11, 31, 58, 59, 58, 59, 31, 10, 11, 31, 60, 61, 60, 61, 31, 10, 11, 36, 66, 67],
    [12, 13, 31, 48, 49, 48, 49, 31, 12, 13, 31, 50, 51, 50, 51, 31, 12, 13, 31, 52, 53, 52, 53, 31, 12, 13, 36, 36, 39],
    [10, 11, 31, 56, 57, 56, 57, 31, 10, 11, 31, 58, 59, 58, 59, 31, 10, 11, 31, 60, 61, 60, 61, 31, 10, 11, 36, 36, 36],
    [12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 36, 36, 36],
    [1, 11, 10, 11, 10, 11, 10, 11, 0, 11, 10, 11, 10, 11, 10, 11, 0, 11, 10, 11, 10, 11, 10, 11, 2, 11, 36, 68, 69],
    [12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 36, 33, 38],
    [10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 36, 34, 38],
    [12, 13, 31, 48, 49, 48, 49, 31, 12, 13, 31, 50, 51, 50, 51, 31, 12, 13, 31, 52, 53, 52, 53, 31, 12, 13, 36, 35, 38],
    [10, 11, 31, 56, 57, 56, 57, 31, 10, 11, 31, 58, 59, 58, 59, 31, 10, 11, 31, 60, 61, 60, 61, 31, 10, 11, 36, 36, 36],
    [12, 13, 31, 48, 49, 48, 49, 31, 12, 13, 31, 50, 51, 50, 51, 31, 12, 13, 31, 52, 53, 52, 53, 31, 12, 13, 36, 36, 36],
    [10, 11, 31, 56, 57, 56, 57, 31, 10, 11, 31, 58, 59, 58, 59, 31, 10, 11, 31, 60, 61, 60, 61, 31, 10, 11, 36, 70, 71],
    [12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 36, 33, 38],
    [1, 11, 10, 11, 10, 11, 10, 11, 0, 11, 10, 11, 10, 11, 10, 11, 0, 11, 10, 11, 10, 11, 10, 11, 2, 11, 36, 34, 38],
    [12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 36, 35, 38],
    [10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 37, 31, 31, 31, 31, 37, 10, 11, 36, 36, 36],
    [12, 13, 31, 48, 49, 48, 49, 31, 12, 13, 31, 50, 51, 50, 51, 31, 12, 13, 31, 52, 53, 52, 53, 31, 12, 13, 36, 36, 36],
    [10, 11, 31, 56, 57, 56, 57, 31, 10, 11, 31, 58, 59, 58, 59, 31, 10, 11, 31, 60, 61, 60, 61, 31, 10, 11, 36, 36, 36],
    [12, 13, 31, 48, 49, 48, 49, 31, 12, 13, 31, 50, 51, 50, 51, 31, 12, 13, 31, 52, 53, 52, 53, 31, 12, 13, 10, 10, 9],
    [10, 11, 31, 56, 57, 56, 57, 31, 10, 11, 31, 58, 59, 58, 59, 31, 10, 11, 31, 60, 61, 60, 61, 31, 10, 11, 12, 13, 12],
    [12, 13, 31, 48, 49, 48, 49, 31, 12, 13, 31, 50, 51, 50, 51, 31, 12, 13, 31, 52, 53, 52, 53, 31, 12, 13, 36, 32, 42],
    [10, 11, 31, 56, 57, 56, 57, 31, 10, 11, 31, 58, 59, 58, 59, 31, 10, 11, 31, 60, 61, 60, 61, 31, 10, 11, 36, 36, 36],
    [12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 37, 31, 31, 31, 31, 37, 12, 13, 36, 36, 36],
    [6, 11, 10, 11, 10, 11, 10, 11, 4, 11, 10, 11, 10, 11, 10, 11, 4, 11, 10, 11, 10, 11, 10, 11, 8, 11, 36, 36, 36],
    [12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 36, 36, 36],
    [36, 36, 36, 36, 36, 36, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 36, 36, 72, 73, 40, 38, 38, 38, 36, 36, 36], ];
var lound = [
    [1, 0],
    [2, 0],
    [1, 1],
    [3, 0],
    [2, 1],
    [4, 0],
    [3, 1],
    [5, 0],
    [4, 1],
    [6, 0],
    [5, 1],
    [7, 0],
    [6, 1],
    [8, 0],
    [7, 1],
    [8, 1]
];
// ここで自作クラスPlayerをつくる
Player = Class.create(Sprite, // Spriteクラスを継承
{
    initialize: function(x, y) { //初期化する
        Sprite.call(this, 22, 22); //Spriteオブジェクトを初期化　
        this.image = game.assets['CHR.png'];
        this.x = x;
        this.y = y;
        this.tx = this.x; //行きたい場所のX座標
        this.ty = this.y; //行きたい場所のY座標
        this.frame = 0;
        toggle = 0;
        get1 = 0;
        get2 = 0;
        get3 = 0;
        put = 1;
        put1 = 0;
        put2 = 0;
        put3 = 0;
        stage = 0;
        count = 2000;
        machine = 4;
        clear = 0;
        attack = 0;
        over = 0;
        fin = 0;
        Initialset();
        game.rootScene.addChild(this);
    },
    //enterframeイベントのリスナーを定義する
    onenterframe: function() {
        destix = Math.floor(this.tx / 11) * 11;
        if (destix > 308) {
            destix = 308;
        }
        destiy = Math.floor(this.ty / 11) * 11;
        //行きたい場所へ近づく
        if (Math.abs(destix - this.x) >= Math.abs(destiy - this.y)) {
            if (Math.abs(destix - this.x) > 21) {
                if (mapArray[destiy / 11][destix / 11] == 56 || mapArray[destiy / 11][destix / 11] == 57) {
                    destiy = destiy - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 58 || mapArray[destiy / 11][destix / 11] == 59) {
                    destiy = destiy - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 60 || mapArray[destiy / 11][destix / 11] == 61) {
                    destiy = destiy - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 12 || mapArray[destiy / 11][destix / 11] == 13) {
                    destiy = destiy - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 16 || mapArray[destiy / 11][destix / 11] == 17) {
                    destiy = destiy - 11;
                }
            }
            if (destix > this.x) {
                directx = 1;
                directy = 0;
                this.frame = 2 + toggle;
                if (mapArray[ply][plx + 2] < 32 && mapArray[ply][plx + 2] > 23 && destiy == this.y) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply][plx + 2] = mapArray[ply][plx + 2] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply + 1][plx + 2] < 32 && mapArray[ply + 1][plx + 2] > 23 && destiy == this.y) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply + 1][plx + 2] = mapArray[ply + 1][plx + 2] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply][plx + 2] == 48) {
                    mapArray[ply][plx + 2] = 14;
                    mapArray[ply + 1][plx + 2] = 16;
                    mapArray[ply][plx + 3] = 15;
                    mapArray[ply + 1][plx + 3] = 17;
                    game.assets['GET.mp3'].play();
                    get1 += 1;
                    mapArray[15][28] = 38 + get1;
                }
                if (mapArray[ply][plx + 2] == 50) {
                    mapArray[ply][plx + 2] = 14;
                    mapArray[ply + 1][plx + 2] = 16;
                    mapArray[ply][plx + 3] = 15;
                    mapArray[ply + 1][plx + 3] = 17;
                    game.assets['GET.mp3'].play();
                    get2 += 1;
                    mapArray[16][28] = 38 + get2;
                }
                if (mapArray[ply][plx + 2] == 52) {
                    mapArray[ply][plx + 2] = 14;
                    mapArray[ply + 1][plx + 2] = 16;
                    mapArray[ply][plx + 3] = 15;
                    mapArray[ply + 1][plx + 3] = 17;
                    game.assets['GET.mp3'].play();
                    get3 += 1;
                    mapArray[17][28] = 38 + get3;
                }
                if (mapArray[ply][plx + 2] == 9 && (get1 + get2 + get3 !== 0)) {
                    put1 = put1 + get1;
                    put2 = put2 + get2;
                    put3 = put3 + get3;
                    get1 = 0;
                    get2 = 0;
                    get3 = 0;
                    mapArray[9][28] = 38 + put1;
                    mapArray[10][28] = 38 + put2;
                    mapArray[11][28] = 38 + put3;
                    mapArray[15][28] = 38;
                    mapArray[16][28] = 38;
                    mapArray[17][28] = 38;
                    if (put1 >= put && put2 >= put && put3 >= put) {
                        clear = 1;
                        stage = stage + 1;
                        if(stage === 16){
                            stage = 0;
                            fin = 1;
                        }
                        game.assets['FAN.mp3'].play();
                    }
                    if (clear === 0) {
                        game.assets['PUT.mp3'].play();
                    }
                }
                if (mapArray[ply][plx + 2] > 23 || mapArray[ply + 1][plx + 2] > 23) {
                    if (destiy > this.y && mapArray[ply + 2][plx] < 24 && mapArray[ply + 2][plx + 1] < 24) {
                        directx = 0;
                        directy = 1;
                        this.frame = 4 + toggle;
                    } else if (destiy < this.y && mapArray[ply - 1][plx] < 24 && mapArray[ply - 1][plx + 1] < 24) {
                        directx = 0;
                        directy = -1;
                        this.frame = 6 + toggle;
                    } else {
                        directx = 0;
                        directy = 0;
                    }
                }
            } else if (destix < this.x) {
                directx = -1;
                directy = 0;
                this.frame = 0 + toggle;
                if (mapArray[ply][plx - 1] < 32 && mapArray[ply][plx - 1] > 23 && destiy == this.y) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply][plx - 1] = mapArray[ply][plx - 1] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply + 1][plx - 1] < 32 && mapArray[ply + 1][plx - 1] > 23 && destiy == this.y) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply + 1][plx - 1] = mapArray[ply + 1][plx - 1] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply][plx - 1] == 49) {
                    mapArray[ply][plx - 1] = 15;
                    mapArray[ply + 1][plx - 1] = 17;
                    mapArray[ply][plx - 2] = 14;
                    mapArray[ply + 1][plx - 2] = 16;
                    game.assets['GET.mp3'].play();
                    get1 += 1;
                    mapArray[15][28] = 38 + get1;
                }
                if (mapArray[ply][plx - 1] == 51) {
                    mapArray[ply][plx - 1] = 15;
                    mapArray[ply + 1][plx - 1] = 17;
                    mapArray[ply][plx - 2] = 14;
                    mapArray[ply + 1][plx - 2] = 16;
                    game.assets['GET.mp3'].play();
                    get2 += 1;
                    mapArray[16][28] = 38 + get2;
                }
                if (mapArray[ply][plx - 1] == 53) {
                    mapArray[ply][plx - 1] = 15;
                    mapArray[ply + 1][plx - 1] = 17;
                    mapArray[ply][plx - 2] = 14;
                    mapArray[ply + 1][plx - 2] = 16;
                    game.assets['GET.mp3'].play();
                    get3 += 1;
                    mapArray[17][28] = 38 + get3;
                }
                if (mapArray[ply][plx - 1] > 23 || mapArray[ply + 1][plx - 1] > 23) {
                    if (destiy > this.y && mapArray[ply + 2][plx] < 24 && mapArray[ply + 2][plx + 1] < 24) {
                        directx = 0;
                        directy = 1;
                        this.frame = 4 + toggle;
                    } else if (destiy < this.y && mapArray[ply - 1][plx] < 24 && mapArray[ply - 1][plx + 1] < 24) {
                        directx = 0;
                        directy = -1;
                        this.frame = 6 + toggle;
                    } else {
                        directx = 0;
                        directy = 0;
                    }
                }
            } else {
                directx = 0;
                directy = 0;
            }
        } else {
            if (Math.abs(destiy - this.y) > 21) {
                if (mapArray[destiy / 11][destix / 11] == 49 || mapArray[destiy / 11][destix / 11] == 57) {
                    destix = destix - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 51 || mapArray[destiy / 11][destix / 11] == 59) {
                    destix = destix - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 53 || mapArray[destiy / 11][destix / 11] == 61) {
                    destix = destix - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 11 || mapArray[destiy / 11][destix / 11] == 13) {
                    destix = destix - 11;
                }
                if (mapArray[destiy / 11][destix / 11] == 15 || mapArray[destiy / 11][destix / 11] == 17) {
                    destix = destix - 11;
                }
            }
            if (destiy > this.y) {
                directx = 0;
                directy = 1;
                this.frame = 4 + toggle;
                if (mapArray[ply + 2][plx] < 32 && mapArray[ply + 2][plx] > 23 && destix == this.x) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply + 2][plx] = mapArray[ply + 2][plx] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply + 2][plx + 1] < 32 && mapArray[ply + 2][plx + 1] > 23 && destix == this.x) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply + 2][plx + 1] = mapArray[ply + 2][plx + 1] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply + 2][plx] == 48) {
                    mapArray[ply + 2][plx] = 14;
                    mapArray[ply + 2][plx + 1] = 15;
                    mapArray[ply + 3][plx] = 16;
                    mapArray[ply + 3][plx + 1] = 17;
                    game.assets['GET.mp3'].play();
                    get1 += 1;
                    mapArray[15][28] = 38 + get1;
                }
                if (mapArray[ply + 2][plx] == 50) {
                    mapArray[ply + 2][plx] = 14;
                    mapArray[ply + 2][plx + 1] = 15;
                    mapArray[ply + 3][plx] = 16;
                    mapArray[ply + 3][plx + 1] = 17;
                    game.assets['GET.mp3'].play();
                    get2 += 1;
                    mapArray[16][28] = 38 + get2;
                }
                if (mapArray[ply + 2][plx] == 52) {
                    mapArray[ply + 2][plx] = 14;
                    mapArray[ply + 2][plx + 1] = 15;
                    mapArray[ply + 3][plx] = 16;
                    mapArray[ply + 3][plx + 1] = 17;
                    game.assets['GET.mp3'].play();
                    get3 += 1;
                    mapArray[17][28] = 38 + get3;
                }
                if (mapArray[ply + 2][plx] > 23 || mapArray[ply + 2][plx + 1] > 23) {
                    if (destix > this.x && mapArray[ply][plx + 2] < 24 && mapArray[ply + 1][plx + 2] < 24) {
                        directx = 1;
                        directy = 0;
                        this.frame = 2 + toggle;
                    } else if (destix < this.x && mapArray[ply][plx - 1] < 24 && mapArray[ply + 1][plx - 1] < 24) {
                        directx = -1;
                        directy = 0;
                        this.frame = 0 + toggle;
                    } else {
                        directx = 0;
                        directy = 0;
                    }
                }
            } else if (destiy < this.y) {
                directx = 0;
                directy = -1;
                this.frame = 6 + toggle;
                if (mapArray[ply - 1][plx] < 32 && mapArray[ply - 1][plx] > 23 && destix == this.x) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply - 1][plx] = mapArray[ply - 1][plx] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply - 1][plx + 1] < 32 && mapArray[ply - 1][plx + 1] > 23 && destix == this.x) {
                    if (mapArray[ply][plx] < 14 && mapArray[ply + 1][plx + 1] < 14) {
                        mapArray[ply - 1][plx + 1] = mapArray[ply - 1][plx + 1] - 1;
                        game.assets['unlock.mp3'].play();
                    }
                }
                if (mapArray[ply - 1][plx] == 56) {
                    mapArray[ply - 1][plx] = 16;
                    mapArray[ply - 1][plx + 1] = 17;
                    mapArray[ply - 2][plx] = 14;
                    mapArray[ply - 2][plx + 1] = 15;
                    game.assets['GET.mp3'].play();
                    get1 += 1;
                    mapArray[15][28] = 38 + get1;
                }
                if (mapArray[ply - 1][plx] == 58) {
                    mapArray[ply - 1][plx] = 16;
                    mapArray[ply - 1][plx + 1] = 17;
                    mapArray[ply - 2][plx] = 14;
                    mapArray[ply - 2][plx + 1] = 15;
                    game.assets['GET.mp3'].play();
                    get2 += 1;
                    mapArray[16][28] = 38 + get2;
                }
                if (mapArray[ply - 1][plx] == 60) {
                    mapArray[ply - 1][plx] = 16;
                    mapArray[ply - 1][plx + 1] = 17;
                    mapArray[ply - 2][plx] = 14;
                    mapArray[ply - 2][plx + 1] = 15;
                    game.assets['GET.mp3'].play();
                    get3 += 1;
                    mapArray[17][28] = 38 + get3;
                }
                if (mapArray[ply - 1][plx] > 23 || mapArray[ply - 1][plx + 1] > 23) {
                    if (destix > this.x && mapArray[ply][plx + 2] < 24 && mapArray[ply + 1][plx + 2] < 24) {
                        directx = 1;
                        directy = 0;
                        this.frame = 2 + toggle;
                    } else if (destix < this.x && mapArray[ply][plx - 1] < 24 && mapArray[ply + 1][plx - 1] < 24) {
                        directx = -1;
                        directy = 0;
                        this.frame = 0 + toggle;
                    } else {
                        directx = 0;
                        directy = 0;
                    }
                }
            } else {
                directx = 0;
                directy = 0;
            }
        }
        if (Math.abs(this.x - tyrex.x) < 20 && Math.abs(this.y - tyrex.y) < 20 && attack === 0) {
            attack = 1;
            game.assets['CATCH.mp3'].play();
            machine = machine - 1;
            get1 = 0;
            get2 = 0;
            get3 = 0;
            mapArray[23][28] = 38 + machine;
            mapArray[15][28] = 38;
            mapArray[16][28] = 38;
            mapArray[17][28] = 38;
            if (machine === 0) {
                over = 1;
                attack = 0;
            }
        }
        if (Math.abs(this.x - saurus.x) < 20 && Math.abs(this.y - saurus.y) < 20 && attack === 0) {
            attack = 1;
            game.assets['CRY.mp3'].play();
            machine = machine - 1;
            get1 = 0;
            get2 = 0;
            get3 = 0;
            mapArray[23][28] = 38 + machine;
            mapArray[15][28] = 38;
            mapArray[16][28] = 38;
            mapArray[17][28] = 38;
            if (machine === 0) {
                over = 1;
                attack = 0;
            }
        }
        count -= 1;
        mapArray[28][22] = 38 + parseInt(count / 1000, 10);
        mapArray[28][23] = 38 + parseInt((count % 1000) / 100, 10);
        mapArray[28][24] = 38 + parseInt((count % 100) / 10, 10);
        mapArray[28][25] = 38 + count % 10;
        plx = plx + directx;
        ply = ply + directy;
        this.x = plx * 11;
        this.y = ply * 11;
        if(attack !== 0 || over > 3){
            this.frame = 24 + toggle;
        }
        toggle = 1 - toggle;
        if (count === 0) {
            over = 1;
        }
        if(attack === 2){
            //カスタムシーンを作る
            subScene = new Scene();
            start = new Sprite(123, 14);
            start.x = 90;
            start.y = 140;
            start.image = game.assets['click.png'];
            subScene.addChild(start);
            //カスタムシーンを表示
            game.pushScene(subScene);
            subScene.addEventListener('touchend', function() {
                game.popScene(); //カスタムシーンを表示終了
                plx = 27;
                ply = 21;
                this.x = plx * 11;
                this.y = ply * 11;
                this.tx = 26 * 11;
                this.ty = 21 * 11;
                tyrex.x = 0;
                tyrex.y = 0;
                attack = 0;
            });
        }
        if (attack === 1) {
            this.tx = 26 * 11;
            this.ty = 21 * 11;
            attack = 2;
        }
        if (clear === 2) {
            //カスタムシーンを作る
            if(fin === 0){
                subScene = new Scene();
                start = new Sprite(270, 27);
                start.x = 20;
                start.y = 140;
                start.image = game.assets['stage.png'];
                subScene.addChild(start);
            }else{
                subScene = new Scene();
                start = new Sprite(51,34);
                start.x = 123;
                start.y = 131;
                start.image = game.assets['fin.png'];
                subScene.addChild(start);    
            }
            //カスタムシーンを表示
            game.pushScene(subScene);
            subScene.addEventListener('touchend', function() {
                game.popScene();
                count = 2000;
                put = lound[stage][0];
                if (lound[stage][1] == 1) {
                    saurus.x = 0;
                    saurus.y = 286;
                } else {
                    saurus.x = 297;
                    saurus.y = 286;
                    stex = 0;
                    stey = 0;
                }
                get1 = 0;
                get2 = 0;
                get3 = 0;
                put1 = 0;
                put2 = 0;
                put3 = 0;
                machine = 4;
                mapArray[23][28] = 38 + machine;
                mapArray[1][27] = 38 + parseInt((stage + 1) / 10, 10);
                mapArray[1][28] = 38 + (stage + 1) % 10;
                mapArray[5][28] = 38 + put;
                mapArray[9][28] = 38;
                mapArray[10][28] = 38;
                mapArray[11][28] = 38;
                mapArray[15][28] = 38;
                mapArray[16][28] = 38;
                mapArray[17][28] = 38;
                Initialset();
                clear = 0;
                fin = 0;
            });
            tyrex.x = 0;
            tyrex.y = 0;
            plx = 27;
            ply = 21;
            this.tx = 26 * 11;
            this.ty = 21 * 11;
        }
        if (clear === 1) {
            clear = 2;
        }
        if(over === 2){
            //カスタムシーンを作る
            subScene = new Scene();
            start = new Sprite(264, 90);
            start.x = 20;
            start.y = 100;
            start.image = game.assets['begin.png'];
            subScene.addChild(start);
            //カスタムシーンを表示
            game.pushScene(subScene);
            subScene.addEventListener('touchend', function() {
                game.popScene(); //カスタムシーンを表示終了
            });
            over = 0;
        }
        if(over === 3){
            tyrex.x = 0;
            tyrex.y = 0;
            saurus.x = 297;
            saurus.y = 286;
            plx = 27;
            ply = 21;
            this.x = plx * 11;
            this.y = ply * 11;
            this.tx = 26 * 11;
            this.ty = 21 * 11;
            over = 2;
        }
        if (over === 4){
            //カスタムシーンを作る
            subScene = new Scene();
            start = new Sprite(95, 49);
            start.x = 100;
            start.y = 130;
            start.image = game.assets['end.png'];
            subScene.addChild(start);
            //カスタムシーンを表示
            game.pushScene(subScene);
            subScene.addEventListener('touchend', function() {
                game.popScene();
                count = 2001;
                stage = 0;
                put = lound[stage][0];
                get1 = 0;
                get2 = 0;
                get3 = 0;
                put1 = 0;
                put2 = 0;
                put3 = 0;
                machine = 4;
                mapArray[23][28] = 38 + machine;
                mapArray[1][27] = 38 + parseInt((stage + 1) / 10, 10);
                mapArray[1][28] = 38 + (stage + 1) % 10;
                mapArray[5][28] = 38 + put;
                mapArray[9][28] = 38;
                mapArray[10][28] = 38;
                mapArray[11][28] = 38;
                mapArray[15][28] = 38;
                mapArray[16][28] = 38;
                mapArray[17][28] = 38;
                Initialset();
                tyrex.x = 0;
                tyrex.y = 0;
                saurus.x = 297;
                saurus.y = 286;
                plx = 27;
                ply = 21;
                this.x = plx * 11;
                this.y = ply * 11;
                this.tx = 26 * 11;
                this.ty = 21 * 11;
                over = 3;
                attack = 0;
                clear = 0;
            });
        }
        if (over === 1){
            game.assets['END.mp3'].play();
            over = 4;
        }
    }
});

Tyrex = Class.create(Sprite, // Spriteクラスを継承
{
    initialize: function() { //初期化する
        Sprite.call(this, 22, 22); //Spriteオブジェクトを初期化　
        this.image = game.assets['CHR.png'];
        this.frame = 10;
        game.rootScene.addChild(this);
    },
    onenterframe: function() {
        place = mapArray[this.y / 11][this.x / 11];
        if (place === 0 || place === 3 || place === 4 || place === 5 || place === 6) {
            if (Math.abs(player.x - this.x) >= Math.abs(player.y - this.y)) {
                if (player.x >= this.x) {
                    enex = 1;
                    eney = 0;
                    this.frame = 10;
                } else {
                    enex = -1;
                    eney = 0;
                    this.frame = 8;
                }
            } else {
                if (player.y > this.y) {
                    enex = 0;
                    eney = 1;
                    this.frame = 12;
                } else {
                    enex = 0;
                    eney = -1;
                    this.frame = 14;
                }
            }
        }
        if (place === 1 || place === 2) {
            if (Math.abs(player.x - this.x) > Math.abs(player.y - this.y)) {
                if (player.x > this.x) {
                    enex = 1;
                    eney = 0;
                    this.frame = 10;
                } else {
                    enex = -1;
                    eney = 0;
                    this.frame = 8;
                }
            } else {
                if (player.y >= this.y) {
                    enex = 0;
                    eney = 1;
                    this.frame = 12;
                } else {
                    enex = 0;
                    eney = -1;
                    this.frame = 14;
                }
            }
        }
        if (place === 7 || place === 8) {
            if (this.x - player.x >= Math.abs(this.y - player.y)) {
                enex = -1;
                eney = 0;
                this.frame = 8;
            } else {
                if (player.y >= this.y) {
                    enex = 0;
                    eney = 1;
                    this.frame = 12;
                } else {
                    enex = 0;
                    eney = -1;
                    this.frame = 14;
                }
            }
        }
        if (this.frame % 2 === 0) {
            this.frame = this.frame + 1;
        } else {
            this.frame = this.frame - 1;
        }
        this.x = this.x + enex * 11;
        this.y = this.y + eney * 11;
    }
});

Saurus = Class.create(Sprite, // Spriteクラスを継承
{
    initialize: function() { //初期化する
        Sprite.call(this, 22, 22); //Spriteオブジェクトを初期化　
        this.image = game.assets['CHR.png'];
        this.frame = 20;
        this.x = 297;
        this.y = 286;
        stex = 0;
        stey = 0;
        game.rootScene.addChild(this);
    },
    onenterframe: function() {
        place = mapArray[this.y / 11][this.x / 11];
        if (place === 0) {
            num = Math.floor(Math.random() * 4);
            if (num === 0) {
                stex = -1;
                stey = 0;
                this.frame = 16;
            } else if (num === 1) {
                stex = 1;
                stey = 0;
                this.frame = 18;
            } else if (num === 2) {
                stex = 0;
                stey = -1;
                this.frame = 22;
            } else {
                stex = 0;
                stey = 1;
                this.frame = 20;
            }
        }
        if (place === 1) {
            num = Math.floor(Math.random() * 2);
            if (stey !== 0) {
                stex = 1;
                stey = 0;
                this.frame = 18;
            } else if (num === 0) {
                stex = 0;
                stey = -1;
                this.frame = 22;
            } else {
                stex = 0;
                stey = 1;
                this.frame = 20;
            }
        }
        if (place === 2) {
            num = Math.floor(Math.random() * 2);
            if (stey !== 0) {
                stex = -1;
                stey = 0;
                this.frame = 16;
            } else if (num === 0) {
                stex = 0;
                stey = -1;
                this.frame = 22;
            } else {
                stex = 0;
                stey = 1;
                this.frame = 20;
            }
        }
        if (place === 3) {
            num = Math.floor(Math.random() * 2);
            if (stex !== 0) {
                stex = 0;
                stey = 1;
                this.frame = 20;
            } else if (num === 0) {
                stex = -1;
                stey = 0;
                this.frame = 16;
            } else {
                stex = 1;
                stey = 0;
                this.frame = 18;
            }
        }
        if (place === 4) {
            num = Math.floor(Math.random() * 2);
            if (stex !== 0) {
                stex = 0;
                stey = -1;
                this.frame = 22;
            } else if (num === 0) {
                stex = -1;
                stey = 0;
                this.frame = 16;
            } else {
                stex = 1;
                stey = 0;
                this.frame = 18;
            }
        }
        if (place === 5) {
            if (stey !== 0) {
                stex = 1;
                stey = 0;
                this.frame = 18;
            } else {
                stex = 0;
                stey = 1;
                this.frame = 20;
            }
        }
        if (place === 6) {
            if (stey !== 0) {
                stex = 1;
                stey = 0;
                this.frame = 18;
            } else {
                stex = 0;
                stey = -1;
                this.frame = 22;
            }
        }
        if (place === 7) {
            if (stey !== 0) {
                stex = -1;
                stey = 0;
                this.frame = 16;
            } else {
                stex = 0;
                stey = 1;
                this.frame = 20;
            }
        }
        if (place === 8) {
            if (stey !== 0) {
                stex = -1;
                stey = 0;
                this.frame = 18;
            } else {
                stex = 0;
                stey = -1;
                this.frame = 22;
            }
        }
        if (this.frame % 2 === 0) {
            this.frame = this.frame + 1;
        } else {
            this.frame = this.frame - 1;
        }
        this.x = this.x + stex * 11;
        this.y = this.y + stey * 11;
    }
});

function Initialset() {
    for (i = 2; i < 25; i++) {
        for (j = 2; j < 26; j++) {
            if (i == 2 || i == 7 || i == 10 || i == 15 || i == 18 || i == 23) {
                if ((j > 2 && j < 7) || (j > 10 && j < 15) || (j > 18 && j < 25)) {
                    mapArray[j][i] = 31;
                }
            }
        }
    }
    for (i = 2; i < 25; i++) {
        for (j = 0; j < 26; j++) {
            if ((i > 2 && i < 7) || (i > 10 && i < 15) || (i > 18 && i < 23)) {
                if (j == 2 || j == 7 || j == 10 || j == 15 || j == 18 || j == 25) {
                    mapArray[j][i] = 31;
                }
            }
        }
    }
    for (i = 3; i < 24; i++) {
        for (j = 3; j < 24; j++) {
            if (j == 3 || j == 5 || j == 11 || j == 13 || j == 19 || j == 21 || j == 23) {
                if (i == 3 || i == 5) {
                    mapArray[j][i] = 48;
                    mapArray[j + 1][i] = 56;
                    mapArray[j][i + 1] = 49;
                    mapArray[j + 1][i + 1] = 57;
                }
            }
        }
    }
    for (i = 3; i < 24; i++) {
        for (j = 3; j < 24; j++) {
            if (j == 3 || j == 5 || j == 11 || j == 13 || j == 19 || j == 21 || j == 23) {
                if (i == 11 || i == 13) {
                    mapArray[j][i] = 50;
                    mapArray[j + 1][i] = 58;
                    mapArray[j][i + 1] = 51;
                    mapArray[j + 1][i + 1] = 59;
                }
            }
        }
    }
    for (i = 3; i < 24; i++) {
        for (j = 3; j < 24; j++) {
            if (j == 3 || j == 5 || j == 11 || j == 13 || j == 19 || j == 21 || j == 23) {
                if (i == 19 || i == 21) {
                    mapArray[j][i] = 52;
                    mapArray[j + 1][i] = 60;
                    mapArray[j][i + 1] = 53;
                    mapArray[j + 1][i + 1] = 61;
                }
            }
        }
    }
    space1 = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 14, i = 13; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = space1[i];
        space1[i] = space1[j];
        space1[j] = tmp;
    }
    space2 = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 14, i = 13; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = space2[i];
        space2[i] = space2[j];
        space2[j] = tmp;
    }
    space3 = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 14, i = 13; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = space3[i];
        space3[i] = space3[j];
        space3[j] = tmp;
    }
    x1 = 0;
    x2 = 0;
    x3 = 0;
    for (i = 3; i < 24; i++) {
        for (j = 3; j < 24; j++) {
            if (mapArray[j][i] == 48) {
                if (space1[x1] === 1) {
                    mapArray[j][i] = 54;
                    mapArray[j + 1][i] = 62;
                    mapArray[j][i + 1] = 55;
                    mapArray[j + 1][i + 1] = 63;
                }
                x1 += 1;
            }
            if (mapArray[j][i] == 50) {
                if (space2[x2] === 1) {
                    mapArray[j][i] = 54;
                    mapArray[j + 1][i] = 62;
                    mapArray[j][i + 1] = 55;
                    mapArray[j + 1][i + 1] = 63;
                }
                x2 += 1;
            }
            if (mapArray[j][i] == 52) {
                if (space3[x3] === 1) {
                    mapArray[j][i] = 54;
                    mapArray[j + 1][i] = 62;
                    mapArray[j][i + 1] = 55;
                    mapArray[j + 1][i + 1] = 63;
                }
                x3 += 1;
            }
        }
    }
}

window.onload = function() {
    game = new Game(320, 320);
    game.fps = 7;
    // マップ用画像の読み込み
    game.preload('BACKCHR.png','CHR.png','begin.png','stage.png','click.png','end.png','fin.png','unlock.mp3','GET.mp3','PUT.mp3','END.mp3','FAN.mp3','CRY.mp3','CATCH.mp3');
    game.onload = function() {
        var map = new Map(11, 11);
        // マップオブジェクトに画像を登録
        map.image = game.assets['BACKCHR.png'];
        // マップデータをマップオブジェクトに渡す
        map.loadData(mapArray);
        // シーンにマップオブジェクトを渡してシーンに描画する
        game.rootScene.addChild(map);
        player = new Player(plx * 11, ply * 11);
        tyrex = new Tyrex();
        saurus = new Saurus();
        //カスタムシーンを作る
        subScene = new Scene();
        start = new Sprite(264, 90);
        start.x = 20;
        start.y = 100;
        start.image = game.assets['begin.png'];
        subScene.addChild(start);
        //カスタムシーンを表示
        game.pushScene(subScene);
        subScene.addEventListener('touchend', function() {
            game.popScene(); //カスタムシーンを表示終了
        });
        //ゲーム画面のどこかをタッチした時の処理
        game.rootScene.addEventListener('touchend', function(event) { //eventにタッチされた座標が入ってくる
            player.tx = event.x; //行きたい場所にタッチしたX座標を指定
            player.ty = event.y; //行きたい場所にタッチしたY座標を指定
        });
        game.rootScene.onenterframe = function() {
            game.rootScene.addChild(map);
            game.rootScene.addChild(saurus);
            game.rootScene.addChild(tyrex);
            game.rootScene.addChild(player);
        };
    };
    game.start();
}