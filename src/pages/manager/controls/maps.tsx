const _actionMap =

   [
    'NUL', //0x00 0
    'CCFunc', //0x01 1
    'STX', //0x02 2
    'ETX', //0x03 3
    'EOT', //0x04 4
    'ENQ', //0x05 5
    'ACK', //0x06 6
    'BEL', //0x07 7
    'BAC', //0x08 8
    'Tab', //0x09 9
    'ENT', //0x0A 10
    'VT', //0x0B 11
    'FF', //0x0C 12
    'CR', //0x0D 13
    'SOH', //0x0E 14
    'SI', //0x0F 15
    'DLE', //0x10 16
    'DC1', //0x11 17
    'DC2', //0x12 18
    'DC3', //0x13 19
    'DC4', //0x14 20
    'NAK', //0x15 21
    'SYN', //0x16 22
    'ETB', //0x17 23
    'CAN', //0x18 24
    'EM', //0x19 25
    'SUB', //0x1A 26
    'ESC', //0x1B 27
    'FS', //0x1C 28
    'GS', //0x1D 29
    'RS', //0x1E 30
    'US', //0x1F 31
    'SPA', //0x20 32
    '!', //0x21 33
    '"', //0x22 34
    '#', //0x23 35
    '$', //0x24 36
    '%', //0x25 37
    '&', //0x26 38
    '\'', //0x27 39
    '(', //0x28 40
    ')', //0x29 41
    '*', //0x2A 42
    '+', //0x2B 43
    ',', //0x2C 44
    '-', //0x2D 45
    '.', //0x2E 46
    '/', //0x2F 47
    '0', //0x30 48
    '1', //0x31 49
    '2', //0x32 50
    '3', //0x33 51
    '4', //0x34 52
    '5', //0x35 53
    '6', //0x36 54
    '7', //0x37 55
    '8', //0x38 56
    '9', //0x39 57
    ':', //0x3A 58
    ';', //0x3B 59
    '<', //0x3C 60
    '=', //0x3D 61
    '>', //0x3E 62
    '?', //0x3F 63
    '@', //0x40 64
    'A', //0x41 65
    'B', //0x42 66
    'C', //0x43 67
    'D', //0x44 68
    'E', //0x45 69
    'F', //0x46 70
    'G', //0x47 71
    'H', //0x48 72
    'I', //0x49 73
    'J', //0x4A 74
    'K', //0x4B 75
    'L', //0x4C 76
    'M', //0x4D 77
    'N', //0x4E 78
    'O', //0x4F 79
    'P', //0x50 80
    'Q', //0x51 81
    'R', //0x52 82
    'S', //0x53 83
    'T', //0x54 84
    'U', //0x55 85
    'V', //0x56 86
    'W', //0x57 87
    'X', //0x58 88
    'Y', //0x59 89
    'Z', //0x5A 90
    '[', //0x5B 91
    "'", //0x5C 92
    ']', //0x5D 93
    '^', //0x5E 94
    '_', //0x5F 95
    '`', //0x60 96
    'a', //0x61 97
    'b', //0x62 98
    'c', //0x63 99
    'd', //0x64 100
    'e', //0x65 101
    'f', //0x66 102
    'g', //0x67 103
    'h', //0x68 104
    'i', //0x69 105
    'j', //0x6A 106
    'k', //0x6B 107
    'l', //0x6C 108
    'm', //0x6D 109
    'n', //0x6E 110
    'o', //0x6F 111
    'p', //0x70 112
    'q', //0x71 113
    'r', //0x72 114
    's', //0x73 115
    't', //0x74 116
    'u', //0x75 117
    'v', //0x76 118
    'w', //0x77 119
    'x', //0x78 120
    'y', //0x79 121
    'z', //0x7A 122
    '{', //0x7B 123
    '|', //0x7C 124
    '}', //0x7D 125
    '~', //0x7E 126
    'DEL', //0x7F 127
    'Ç', //0x80 128
    'ü', //0x81 129
    'é', //0x82 130
    'â', //0x83 131
    'ä', //0x84 132
    'à', //0x85 133
    'å', //0x86 134
    'ç', //0x87 135
    'ê', //0x88 136
    'ë', //0x89 137
    'è', //0x8A 138
    'ï', //0x8B 139
    'î', //0x8C 140
    'ì', //0x8D 141
    'Ä', //0x8E 142
    'Å', //0x8F 143
    'É', //0x90 144
    'æ', //0x91 145
    'Æ', //0x92 146
    'ô', //0x93 147
    'ö', //0x94 148
    'ò', //0x95 149
    'û', //0x96 150
    'ù', //0x97 151
    'ÿ', //0x98 152
    'Ö', //0x99 153
    'Ü', //0x9A 154
    'ø', //0x9B 155
    '£', //0x9C 156
    'Ø', //0x9D 157
    '×', //0x9E 158
    'ƒ', //0x9F 159
    'á', //0xA0 160
    'í', //0xA1 161
    'ó', //0xA2 162
    'ú', //0xA3 163
    'ñ', //0xA4 164
    'Ñ', //0xA5 165
    'ª', //0xA6 166
    'º', //0xA7 167
    '¿', //0xA8 168
    '®', //0xA9 169
    '¬', //0xAA 170
    '½', //0xAB 171
    '¼', //0xAC 172
    '¡', //0xAD 173
    '«', //0xAE 174
    '»', //0xAF 175
    '░', //0xB0 176
    '▒', //0xB1 177
    '▓', //0xB2 178
    '│', //0xB3 179
    '┤', //0xB4 180
    'Á', //0xB5 181
    'Â', //0xB6 182
    'À', //0xB7 183
    '©', //0xB8 184
    '╣', //0xB9 185
    '║', //0xBA 186
    '╗', //0xBB 187
    '╝', //0xBC 188
    '¢', //0xBD 189
    '¥', //0xBE 190
    '┐', //0xBF 191
    '└', //0xC0 192
    '┴', //0xC1 193
    '┬', //0xC2 194
    '├', //0xC3 195
    '─', //0xC4 196
    '┼', //0xC5 197
    'ã', //0xC6 198
    'Ã', //0xC7 199
    '╚', //0xC8 200
    '╔', //0xC9 201
    '╩', //0xCA 202
    '╦', //0xCB 203
    '╠', //0xCC 204
    '═', //0xCD 205
    '╬', //0xCE 206
    '¤', //0xCF 207
    'ð', //0xD0 208
    'Ð', //0xD1 209
    'Ê', //0xD2 210
    'Ë', //0xD3 211
    'È', //0xD4 212
    'ı', //0xD5 213
    'Í', //0xD6 214
    'Î', //0xD7 215
    'Ï', //0xD8 216
    '┘', //0xD9 217
    '┌', //0xDA 218
    '█', //0xDB 219
    '▄', //0xDC 220
    '¦', //0xDD 221
    'Ì', //0xDE 222
    '▀', //0xDF 223
    'Ó', //0xE0 224
    'ß', //0xE1 225
    'Ô', //0xE2 226
    'Ò', //0xE3 227
    'õ', //0xE4 228
    'Õ', //0xE5 229
    'µ', //0xE6 230
    'þ', //0xE7 231
    'Þ', //0xE8 232
    'Ú', //0xE9 233
    'Û', //0xEA 234
    'Ù', //0xEB 235
    'ý', //0xEC 236
    'Ý', //0xED 237
    '¯', //0xEE 238
    '´', //0xEF 239
    '≡', //0xF0 240
    '±', //0xF1 241
    '‗', //0xF2 242
    '¾', //0xF3 243
    '¶', //0xF4 244
    '§', //0xF5 245
    '÷', //0xF6 246
    '¸', //0xF7 247
    '°', //0xF8 248
    '¨', //0xF9 249
    '·', //0xFA 250
    '¹', //0xFB 251
    '³', //0xFC 252
    '²', //0xFD 253
    '■', //0xFE 254
    'NBSP', //0xFF 255
    'Reset', //0x0100 256
    'Delay0001ms', //0x0101 257
    'Delay0010ms', //0x0102 258
    'Delay0100ms', //0x0103 259
    'Delay1000ms', //0x0104 260
    '0x0105', //0x0105 261
    '0x0106', //0x0106 262
    '0x0107', //0x0107 263
    '0x0108', //0x0108 264
    '0x0109', //0x0109 265
    '0x010A', //0x010A 266
    '0x010B', //0x010B 267
    '0x010C', //0x010C 268
    '0x010D', //0x010D 269
    '0x010E', //0x010E 270
    'Impulse', //0x010F 271
    'LAT', //0x0110 272
    'RAT', //0x0111 273
    'LNS', //0x0112 274
    'RNS', //0x0113 275
    'SpurToggle', //0x0114 276
    'Dup', //0x0115 277
    'ImpulseToggle', //0x0116 278
    'GTM', //0x0117 279
    '0x0118', //0x0118 280
    '0x0119', //0x0119 281
    '0x011A', //0x011A 282
    '0x011B', //0x011B 283
    '0x011C', //0x011C 284
    '0x011D', //0x011D 285
    '0x011E', //0x011E 286
    '0x011F', //0x011F 287
    '0x0120', //0x0120 288
    '0x0121', //0x0121 289
    '0x0122', //0x0122 290
    '0x0123', //0x0123 291
    '0x0124', //0x0124 292
    '0x0125', //0x0125 293
    '0x0126', //0x0126 294
    '0x0127', //0x0127 295
    '0x0128', //0x0128 296
    '0x0129', //0x0129 297
    '0x012A', //0x012A 298
    '0x012B', //0x012B 299
    '0x012C', //0x012C 300
    '0x012D', //0x012D 301
    '0x012E', //0x012E 302
    '0x012F', //0x012F 303
    '0x0130', //0x0130 304
    '0x0131', //0x0131 305
    '0x0132', //0x0132 306
    '0x0133', //0x0133 307
    '0x0134', //0x0134 308
    '0x0135', //0x0135 309
    '0x0136', //0x0136 310
    '0x0137', //0x0137 311
    '0x0138', //0x0138 312
    '0x0139', //0x0139 313
    '0x013A', //0x013A 314
    '0x013B', //0x013B 315
    '0x013C', //0x013C 316
    'MLB', //0x013D 317
    'RMC', //0x013E 318
    'MMB', //0x013F 319
    'MouseLeftBtnToggle', //0x0140 320
    'MouseRightBtnToggle', //0x0141 321
    'MouseMiddleBtnToggle', //0x0142 322
    'MouseLeftBtnPress', //0x0143 323
    'MouseRightBtnPress', //0x0144 324
    'MouseMiddleBtnPress', //0x0145 325
    'MouseLeftBtnRelease', //0x0146 326
    'MouseRightBtnRelease', //0x0147 327
    'MouseMiddleBtnRelease', //0x0148 328
    'M↓', //0x0149 329
    'M→', //0x014A 330
    'M↑', //0x014B 331
    'M←', //0x014C 332
    'MSD', //0x014D 333
    'MouseScrollCoastRight', //0x014E 334
    'MSU', //0x014F 335
    'MouseScrollCoastLeft', //0x0150 336
    'LeftDoubleClick', //0x0151 337
    'RightDoubleClick', //0x0152 338
    'TripleClick', //0x0153 339
    '0x0154', //0x0154 340
    '0x0155', //0x0155 341
    '0x0156', //0x0156 342
    '0x0157', //0x0157 343
    '0x0158', //0x0158 344
    '0x0159', //0x0159 345
    '0x015A', //0x015A 346
    '0x015B', //0x015B 347
    '0x015C', //0x015C 348
    '0x015D', //0x015D 349
    '0x015E', //0x015E 350
    '0x015F', //0x015F 351
    '0x0160', //0x0160 352
    '0x0161', //0x0161 353
    '0x0162', //0x0162 354
    '0x0163', //0x0163 355
    '0x0164', //0x0164 356
    '0x0165', //0x0165 357
    'PwrStat', //0x0166 358
    '0x0167', //0x0167 359
    '0x0168', //0x0168 360
    '0x0169', //0x0169 361
    '0x016A', //0x016A 362
    '0x016B', //0x016B 363
    '0x016C', //0x016C 364
    '0x016D', //0x016D 365
    '0x016E', //0x016E 366
    '0x016F', //0x016F 367
    '0x0170', //0x0170 368
    '0x0171', //0x0171 369
    '0x0172', //0x0172 370
    '0x0173', //0x0173 371
    '0x0174', //0x0174 372
    '0x0175', //0x0175 373
    '0x0176', //0x0176 374
    '0x0177', //0x0177 375
    '0x0178', //0x0178 376
    '0x0179', //0x0179 377
    '0x017A', //0x017A 378
    '0x017B', //0x017B 379
    '0x017C', //0x017C 380
    '0x017D', //0x017D 381
    '0x017E', //0x017E 382
    'ReleaseMods', //0x017F 383
    'LCK', //0x0180 384
    'LSK', //0x0181 385
    'LAK', //0x0182 386
    'LGK', //0x0183 387
    'RCK', //0x0184 388
    'RSK', //0x0185 389
    'RAK', //0x0186 390
    'RGK', //0x0187 391
    'CAP', //0x0188 392
    'F1', //0x0189 393
    'F2', //0x018A 394
    'F3', //0x018B 395
    'F4', //0x018C 396
    'F5', //0x018D 397
    'F6', //0x018E 398
    'F7', //0x018F 399
    'F8', //0x0190 400
    'F9', //0x0191 401
    'F10', //0x0192 402
    'F11', //0x0193 403
    'F12', //0x0194 404
    'PrintScreen', //0x0195 405
    'ScrollLock', //0x0196 406
    'Pause', //0x0197 407
    'Insert', //0x0198 408
    'Home', //0x0199 409
    'PageUp', //0x019A 410
    'DeleteForward', //0x019B 411
    'End', //0x019C 412
    'PageDown', //0x019D 413
    '→', //0x019E 414
    '←', //0x019F 415
    '↓', //0x01A0 416
    '↑', //0x01A1 417
    'NumLock', //0x01A2 418
    'F13', //0x01A3 419
    'F14', //0x01A4 420
    'F15', //0x01A5 421
    'F16', //0x01A6 422
    'F17', //0x01A7 423
    'F18', //0x01A8 424
    'F19', //0x01A9 425
    'F20', //0x01AA 426
    'F21', //0x01AB 427
    'F22', //0x01AC 428
    'F23', //0x01AD 429
    'F24', //0x01AE 430
    'Execute', //0x01AF 431
    'Help', //0x01B0 432
    'Menu', //0x01B1 433
    'Select', //0x01B2 434
    'Stop', //0x01B3 435
    'Again', //0x01B4 436
    'Undo', //0x01B5 437
    'Cut', //0x01B6 438
    'Copy', //0x01B7 439
    'Paste', //0x01B8 440
    'Find', //0x01B9 441
    'Mute', //0x01BA 442
    'VolUp', //0x01BB 443
    'VolDn', //0x01BC 444
    'Intl1', //0x01BD 445
    'Intl2', //0x01BE 446
    'Intl3', //0x01BF 447
    'Intl4', //0x01C0 448
    'Intl5', //0x01C1 449
    'Intl6', //0x01C2 450
    'Intl7', //0x01C3 451
    'Intl8', //0x01C4 452
    'Intl9', //0x01C5 453
    'LANG1', //0x01C6 454
    'LANG2', //0x01C7 455
    'LANG3', //0x01C8 456
    'LANG4', //0x01C9 457
    'LANG5', //0x01CA 458
    'LANG6', //0x01CB 459
    'LANG7', //0x01CC 460
    'LANG8', //0x01CD 461
    'LANG9', //0x01CE 462
    'AtlErase', //0x01CF 463
    'SysReq', //0x01D0 464
    'Cancel', //0x01D1 465
    'Clear', //0x01D2 466
    'Prior', //0x01D3 467
    'Return', //0x01D4 468
    'Separator', //0x01D5 469
    'Out', //0x01D6 470
    'Oper', //0x01D7 471
    'Clear/Again', //0x01D8 472
    'CrSel/Props', //0x01D9 473
    'ExSel', //0x01DA 474
    'ThouSep', //0x01DB 475
    'DeciSep', //0x01DC 476
    'CurrencyUnit', //0x01DD 477
    'CurrencySubUnit', //0x01DE 478
    'KPMStore', //0x01DF 479
    'KPMRecall', //0x01E0 480
    'KPMClear', //0x01E1 481
    'KPMAdd', //0x01E2 482
    'KPMSub', //0x01E3 483
    'KPMMult', //0x01E4 484
    'KPMDiv', //0x01E5 485
    'KP+/-', //0x01E6 486
    'KPClear', //0x01E7 487
    'KPClearEntry', //0x01E8 488
    'KPBin', //0x01E9 489
    'KPOct', //0x01EA 490
    'KPDec', //0x01EB 491
    'KPHex', //0x01EC 492
    'KMPlayPause', //0x01ED 493
    'KMStopCD', //0x01EE 494
    'KMPrevSong', //0x01EF 495
    'KMNextSong', //0x01F0 496
    'KMEjectCD', //0x01F1 497
    'KMVolUp', //0x01F2 498
    'KMVolDn', //0x01F3 499
    'KMMute', //0x01F4 500
    'KMwww', //0x01F5 501
    'KMBack', //0x01F6 502
    'KMForward', //0x01F7 503
    'KMStop', //0x01F8 504
    'KMFind', //0x01F9 505
    'KMScrollUp', //0x01FA 506
    'KMScrollDn', //0x01FB 507
    'KMEdit', //0x01FC 508
    'KMSleep', //0x01FD 509
    'KMCoffee', //0x01FE 510
    'KMRefresh', //0x01FF 511
    'CC_Physical', //0x0200 512
    'RH_Thumb_3_Left', //0x0201 513
    'RH_Thumb_3_Down', //0x0202 514
    'RH_Thumb_3_Right', //0x0203 515
    'RH_Thumb_3_Up', //0x0204 516
    'RH_Thumb_3_Center', //0x0205 517
    'RH_Thumb_2_Left', //0x0206 518
    'RH_Thumb_2_Down', //0x0207 519
    'RH_Thumb_2_Right', //0x0208 520
    'RH_Thumb_2_Up', //0x0209 521
    'RH_Thumb_2_Center', //0x0210 522
    'RH_Thumb_1_Left', //0x0211 523
    'RH_Thumb_1_Down', //0x0212 524
    'RH_Thumb_1_Right', //0x0213 525
    'RH_Thumb_1_Up', //0x0214 526
    'RH_Thumb_1_Center', //0x0215 527
    'RH_Pinky_Left', //0x0216 528
    'RH_Pinky_Down', //0x0217 529
    'RH_Pinky_Right', //0x0218 530
    'RH_Pinky_Up', //0x0219 531
    'RH_Pinky_Center', //0x0220 532
    'RH_Ring_Secondary_Left', //0x0221 533
    'RH_Ring_Secondary_Down', //0x0222 534
    'RH_Ring_Secondary_Right', //0x0223 535
    'RH_Ring_Secondary_Up', //0x0224 536
    'RH_Ring_Secondary_Center', //0x0225 537
    'RH_Ring_Primary_Left', //0x0226 538
    'RH_Ring_Primary_Down', //0x0227 539
    'RH_Ring_Primary_Right', //0x0228 540
    'RH_Ring_Primary_Up', //0x0229 541
    'RH_Ring_Primary_Center', //0x0230 542
    'RH_Middle_Secondary_Left', //0x0231 543
    'RH_Middle_Secondary_Down', //0x0232 544
    'RH_Middle_Secondary_Right', //0x0233 545
    'RH_Middle_Secondary_Up', //0x0234 546
    'RH_Middle_Secondary_Center', //0x0235 547
    'RH_Middle_Primary_Left', //0x0236 548
    'RH_Middle_Primary_Down', //0x0237 549
    'RH_Middle_Primary_Right', //0x0238 550
    'RH_Middle_Primary_Up', //0x0239 551
    'RH_Middle_Primary_Center', //0x0240 552
    'RH_Index_Left', //0x0241 553
    'RH_Index_Down', //0x0242 554
    'RH_Index_Right', //0x0243 555
    'RH_Index_Up', //0x0244 556
    'RH_Index_Center', //0x0245 557
    'LH_Thumb_3_Left', //0x0246 558
    'LH_Thumb_3_Down', //0x0247 559
    'LH_Thumb_3_Right', //0x0248 560
    'LH_Thumb_3_Up', //0x0249 561
    'LH_Thumb_3_Center', //0x0250 562
    'LH_Thumb_2_Left', //0x0251 563
    'LH_Thumb_2_Down', //0x0252 564
    'LH_Thumb_2_Right', //0x0253 565
    'LH_Thumb_2_Up', //0x0254 566
    'LH_Thumb_2_Center', //0x0255 567
    'LH_Thumb_1_Left', //0x0256 568
    'LH_Thumb_1_Down', //0x0257 569
    'LH_Thumb_1_Right', //0x0258 570
    'LH_Thumb_1_Up', //0x0259 571
    'LH_Thumb_1_Center', //0x0260 572
    'LH_Pinky_Left', //0x0261 573
    'LH_Pinky_Down', //0x0262 574
    'LH_Pinky_Right', //0x0263 575
    'LH_Pinky_Up', //0x0264 576
    'LH_Pinky_Center', //0x0265 577
    'LH_Ring_Secondary_Left', //0x0266 578
    'LH_Ring_Secondary_Down', //0x0267 579
    'LH_Ring_Secondary_Right', //0x0268 580
    'LH_Ring_Secondary_Up', //0x0269 581
    'LH_Ring_Secondary_Center', //0x0270 582
    'LH_Ring_Primary_Left', //0x0271 583
    'LH_Ring_Primary_Down', //0x0272 584
    'LH_Ring_Primary_Right', //0x0273 585
    'LH_Ring_Primary_Up', //0x0274 586
    'LH_Ring_Primary_Center', //0x0275 587
    'LH_Middle_Secondary_Left', //0x0276 588
    'LH_Middle_Secondary_Down', //0x0277 589
    'LH_Middle_Secondary_Right', //0x0278 590
    'LH_Middle_Secondary_Up', //0x0279 591
    'LH_Middle_Secondary_Center', //0x0280 592
    'LH_Middle_Primary_Left', //0x0281 593
    'LH_Middle_Primary_Down', //0x0282 594
    'LH_Middle_Primary_Right', //0x0283 595
    'LH_Middle_Primary_Up', //0x0284 596
    'LH_Middle_Primary_Center', //0x0285 597
    'LH_Index_Left', //0x0286 598
    'LH_Index_Down', //0x0287 599
    'LH_Index_Right', //0x0288 600
    'LH_Index_Up', //0x0289 601
    'LH_Index_Center' //0x0290 602
];

const  CHARACHORDER = [
    0x0000, // 0,
    0x013E, // 1, mouse right button press-and-release
    ('!').charCodeAt(0), // 2, !
    0x0187, // 3, right gui
    0x003F, // 4, ?
    0x0000, // 5,
    ('b').charCodeAt(0), // 6, b
    ('q').charCodeAt(0), // 7, q
    0x0115, // 8, previous phrase
    ('x').charCodeAt(0), // 9, x
    0x0000, //10,
    ('f').charCodeAt(0), //11, f
    ('d').charCodeAt(0), //12, d
    ('h').charCodeAt(0), //13, h
    ('p').charCodeAt(0), //14, p
    0x0000, //15, //'fed' is using this
    0x0111, //16, ambi throw right
    0x0113, //17, num-shift right
    0x0186, //18, alt right
    0x0185, //19, shift right
    0x0000, //20,
    0x0149, //21, mouse left hand down
    0x014A, //22, mouse left hand right
    0x014B, //23, mouse left hand up
    0x014C, //24, mouse left hand left
    0x0000, //25,
    ('s').charCodeAt(0), //26, s
    (';').charCodeAt(0), //27, ;
    0x0184, //28, ctrl right
    ('y').charCodeAt(0), //29, y
    0x0000, //30,
    0x01A0, //31, arrow down
    0x019E, //32, arrow right
    0x01A1, //33, arrow up
    0x019F, //34, arrow left
    0x0000, //35,
    ('n').charCodeAt(0), //36, n
    ('j').charCodeAt(0), //37, j
    0x0009, //38, tab horizontal
    ('l').charCodeAt(0), //39, l
    0x0000, //40,
    ('t').charCodeAt(0), //41, t
    (' ').charCodeAt(0), //42,  (space)
    0x000A, //43, enter (line feed)
    ('a').charCodeAt(0), //44, a
    0x0000, //45,
    ('/').charCodeAt(0), //46, /
    ('-').charCodeAt(0), //47, -
    0x0183, //48, left gui
    0x001B, //49, escape
    0x0000, //50,
    ('w').charCodeAt(0), //51, w
    0x013D, //52, mouse left button press-and-release
    ('g').charCodeAt(0), //53, g
    ('z').charCodeAt(0), //54, z
    0x0151, //55, double click
    ('k').charCodeAt(0), //56, k
    ('v').charCodeAt(0), //57, v
    ('m').charCodeAt(0), //58, m
    ('c').charCodeAt(0), //59, c
    0x0000, //60,
    0x0110, //61, ambi throw left
    0x0181, //62, shift left
    0x0182, //63, alt left
    0x0110, //64, num-shift left
    0x0000, //65,
    0x0149, //66, mouse right hand down
    0x014A, //67, mouse right hand right
    0x014B, //68, mouse right hand up
    0x014C, //69, mouse right hand left
    0x0000, //70,
    ('u').charCodeAt(0), //71, u
    ('\\').charCodeAt(0), //72, \
    0x0180, //73, left ctrl
    (',').charCodeAt(0), //74, ,
    0x0000, //75,
    0x01A0, //76, arrow down
    0x019E, //77, arrow right
    0x01A1, //78, arrow up
    0x019F, //79, arrow left
    0x0000, //80,
    ('o').charCodeAt(0), //81, o
    ('i').charCodeAt(0), //82, i
    0x007F, //83, del forward
    ('.').charCodeAt(0), //84, .
    0x0000, //85,
    ('e').charCodeAt(0), //86, e
    ('r').charCodeAt(0), //87, r
    0x0008, //88, backspace
    (' ').charCodeAt(0)  //89,  (space)
  ];

  const CHARACHORDERLITE = [
    'GTM', //0
    'LCtrl', //1
    'LAlt', //2
    'LSpace', //3
    'Function', //4
    'Dup', //5
    'RSpace', //6
    'Dup', //7
    'Win', //8
    'Left', //9
    'Down', //10
    'Right', //11
    'LShift', //12
    'z', //13
    'x', //14
    'c', //15
    'v', //16
    'b', //17
    'n', //18
    'm', //19
    ',', //20
    '.', //21
    '/', //22
    'RShift', //23
    'Up', //24
    'Del', //25
    'Spur', //26
    'a', //27
    's', //28
    'd', //29
    'f', //30
    'g', //31
    'h', //32
    'j', //33
    'k', //34
    'l', //35
    ';', //36
    '\'', //37
    'Tab', //38
    'q', //39
    'w', //40
    'e', //41
    'r', //42
    't', //43
    'y', //44
    'u', //45
    'i', //46
    'o', //47
    'p', //48
    '[', //49
    '\\', //50
    '1', //51
    '2', //52
    '3', //53
    '4', //54
    '5', //55
    '6', //56
    '7', //57
    '8', //58
    '9', //59
    '0', //60
    '-', //61
    '=', //62
    'Back'  //63
  ];


  //this shouldn't be used anymore
  let _keyMap = [
  'GTM', //0
  'LCtrl', //1
  'LAlt', //2
  'LSpace', //3
  'Present', //4
  'Dup', //5 Plural
  'RSpace', //6
  'Dup', //7
  'Win', //8
  'Left', //9
  'Down', //10
  'Right', //11
  'LShift', //12
  'z', //13
  'x', //14
  'c', //15
  'v', //16
  'b', //17
  'n', //18
  'm', //19
  ',', //20
  '.', //21
  '/', //22
  'RShift', //23
  'Up', //24
  'Del', //25
  'Spur', //26
  'a', //27
  's', //28
  'd', //29
  'f', //30
  'g', //31
  'h', //32
  'j', //33
  'k', //34
  'l', //35
  ';', //36
  '\'', //37
  'Tab', //38
  'q', //39
  'w', //40
  'e', //41
  'r', //42
  't', //43
  'y', //44
  'u', //45
  'i', //46
  'o', //47
  'p', //48
  '[', //49
  '\\', //50
  '1', //51
  '2', //52
  '3', //53
  '4', //54
  '5', //55
  '6', //56
  '7', //57
  '8', //58
  '9', //59
  '0', //60
  '-', //61
  '=', //62
  'Back'  //63
  ];
  _keyMap = _keyMap.reverse();
  const _keyMapDefaults = [

    CHARACHORDER,
    CHARACHORDERLITE

    ];

    const _chordMaps: any[][] = [];
    const _chordLayout: any[][] = []

    const actionMap = [
      '', //0, 10-bit Action Codes 0x00
      '', //1, 10-bit Action Codes 0x01
      '', //2, 10-bit Action Codes 0x02
      '', //3, 10-bit Action Codes 0x03
      '', //4, 10-bit Action Codes 0x04
      '', //5, 10-bit Action Codes 0x05
      '', //6, 10-bit Action Codes 0x06
      '', //7, 10-bit Action Codes 0x07
      '', //8, 10-bit Action Codes 0x08
      '', //9, 10-bit Action Codes 0x09
      '', //10, 10-bit Action Codes 0x0A
      '', //11, 10-bit Action Codes 0x0B
      '', //12, 10-bit Action Codes 0x0C
      '', //13, 10-bit Action Codes 0x0D
      '', //14, 10-bit Action Codes 0x0E
      '', //15, 10-bit Action Codes 0x0F
      '', //16, 10-bit Action Codes 0x10
      '', //17, 10-bit Action Codes 0x11
      '', //18, 10-bit Action Codes 0x12
      '', //19, 10-bit Action Codes 0x13
      '', //20, 10-bit Action Codes 0x14
      '', //21, 10-bit Action Codes 0x15
      '', //22, 10-bit Action Codes 0x16
      '', //23, 10-bit Action Codes 0x17
      '', //24, 10-bit Action Codes 0x18
      '', //25, 10-bit Action Codes 0x19
      '', //26, 10-bit Action Codes 0x1A
      '', //27, 10-bit Action Codes 0x1B
      '', //28, 10-bit Action Codes 0x1C
      '', //29, 10-bit Action Codes 0x1D
      '', //30, 10-bit Action Codes 0x1E
      '', //31, 10-bit Action Codes 0x1F
      ' ', //32, Space
      '!', //33, Exclamation Point
      '"', //34, Double Quote
      '#', //35, Hash Symbol
      '$', //36, Dollar Sign
      '%', //37, Percent
      '&', //38, Ampersand
      '\'', //39, Single Quote
      '(', //40, Left Parenthesis
      ')', //41, Right Parenthesis
      '*', //42, Asterisk
      '+', //43, Plus
      ',', //44, Comma
      '-', //45, Minus
      '.', //46, Period
      '/', //47, Forward Slash
      '0', //48, Zero
      '1', //49, One
      '2', //50, Two
      '3', //51, Three
      '4', //52, Four
      '5', //53, Five
      '6', //54, Six
      '7', //55, Seven
      '8', //56, Eight
      '9', //57, Nine
      ':', //58, Colon
      ';', //59, Semicolon
      '<', //60, Less Than
      '=', //61, Equals
      '>', //62, Greater Than
      '?', //63, Question Mark
      '@', //64, At Symbol
      'A', //65, Uppercase A
      'B', //66, Uppercase B
      'C', //67, Uppercase C
      'D', //68, Uppercase D
      'E', //69, Uppercase E
      'F', //70, Uppercase F
      'G', //71, Uppercase G
      'H', //72, Uppercase H
      'I', //73, Uppercase I
      'J', //74, Uppercase J
      'K', //75, Uppercase K
      'L', //76, Uppercase L
      'M', //77, Uppercase M
      'N', //78, Uppercase N
      'O', //79, Uppercase O
      'P', //80, Uppercase P
      'Q', //81, Uppercase Q
      'R', //82, Uppercase R
      'S', //83, Uppercase S
      'T', //84, Uppercase T
      'U', //85, Uppercase U
      'V', //86, Uppercase V
      'W', //87, Uppercase W
      'X', //88, Uppercase X
      'Y', //89, Uppercase Y
      'Z', //90, Uppercase Z
      '[', //91, Left Bracket
      '\\', //92, Backslash
      ']', //93, Right Bracket
      '^', //94, Carrot
      '_', //95, Underscore
      '`', //96, Grave Mark
      'a', //97, Lowercase a
      'b', //98, Lowercase b
      'c', //99, Lowercase c
      'd', //100, Lowercase d
      'e', //101, Lowercase e
      'f', //102, Lowercase f
      'g', //103, Lowercase g
      'h', //104, Lowercase h
      'i', //105, Lowercase i
      'j', //106, Lowercase j
      'k', //107, Lowercase k
      'l', //108, Lowercase l
      'm', //109, Lowercase m
      'n', //110, Lowercase n
      'o', //111, Lowercase o
      'p', //112, Lowercase p
      'q', //113, Lowercase q
      'r', //114, Lowercase r
      's', //115, Lowercase s
      't', //116, Lowercase t
      'u', //117, Lowercase u
      'v', //118, Lowercase v
      'w', //119, Lowercase w
      'x', //120, Lowercase x
      'y', //121, Lowercase y
      'z', //122, Lowercase z
      '{', //123, Left Curly Brace
      '|', //124, Pipe
      '}', //125, Right Curly Brace
      '~', //126, Tilde
      'DEL', //127, Delete
      '€', //128, Uppercase cedilla
      '', //129, HOP (High Octet Preset)
      '‚', //130, Single Low-9 Quotation Mark
      'ƒ', //131, Latin Small Letter f with Hook; Florin
      '„', //132, Double Low-9 Quotation Mark
      '…', //133, Horizontal Ellipsis
      '†', //134, Dagger
      '‡', //135, Double Dagger
      'ˆ', //136, Circumflex
      '‰', //137, Per Mile
      'Š', //138, Capital S Caron
      '‹', //139, Left Guillemet
      'Œ', //140, Capital Ligature OE
      '', //141, RI (Reverse Index)
      'Ž', //142, Capital Z Caron
      '', //143, SS3 (Single-Shift G3)
      '', //144, DCS (Device Control String)
      '‘', //145, Single Quote Left
      '’', //146, Single Quote Right
      '“', //147, Double Quote Left
      '”', //148, Double Quote Right
      '•', //149, Bullet
      '–', //150, En Dash
      '—', //151, Em Dash
      '˜', //152, Small Tilde
      '™', //153, Trademark
      'š', //154, Small s Carson
      '›', //155, Right Guillemet
      'œ', //156, Small Ligature oe
      '', //157, Operating System Command
      'ž', //158, Small Z Caron
      'Ÿ', //159, Capital Y Diaeresis
      ' ', //160, No Break Space
      '¡', //161, Inverted Exclamation
      '¢', //162, Cent
      '£', //163, Pound
      '¤', //164, Currency
      '¥', //165, Yen
      '¦', //166, Broken Bar
      '§', //167, Section
      '¨', //168, Diaeresis
      '©', //169, Copyright
      'ª', //170, Feminine Ordinal
      '«', //171, Double Left Guillemet
      '¬', //172, Not
      '­', //173, Soft Hyphen
      '®', //174, Registered
      '¯', //175, Macron
      '°', //176, Degree
      '±', //177, Plus Minus
      '²', //178, Superscript Two
      '³', //179, Superscript Three
      '´', //180, Acute
      'µ', //181, Micro
      '¶', //182, Pilcrow
      '·', //183, Middle Dot
      '¸', //184, Cedilla
      '¹', //185, Superscript One
      'º', //186, Masculine Ordinal
      '»', //187, Double Right Guillemet
      '¼', //188, One Quarter Fraction
      '½', //189, One Half Fraction
      '¾', //190, Three Quarters Fraction
      '¿', //191, Inverted Question
      'À', //192, Capital A Grave
      'Á', //193,
      'Â', //194,
      'Ã', //195,
      'Ä', //196,
      'Å', //197,
      'Æ', //198,
      'Ç', //199,
      'È', //200,
      'É', //201,
      'Ê', //202,
      'Ë', //203,
      'Ì', //204,
      'Í', //205,
      'Î', //206,
      'Ï', //207,
      'Ð', //208,
      'Ñ', //209,
      'Ò', //210,
      'Ó', //211,
      'Ô', //212,
      'Õ', //213,
      'Ö', //214,
      '×', //215,
      'Ø', //216,
      'Ù', //217,
      'Ú', //218,
      'Û', //219,
      'Ü', //220,
      'Ý', //221,
      'Þ', //222,
      'ß', //223,
      'à', //224,
      'á', //225,
      'â', //226,
      'ã', //227,
      'ä', //228,
      'å', //229,
      'æ', //230,
      'ç', //231,
      'è', //232,
      'é', //233,
      'ê', //234,
      'ë', //235,
      'ì', //236,
      'í', //237,
      'î', //238,
      'ï', //239,
      'ð', //240,
      'ñ', //241,
      'ò', //242,
      'ó', //243,
      'ô', //244,
      'õ', //245,
      'ö', //246,
      '÷', //247,
      'ø', //248,
      'ù', //249,
      'ú', //250,
      'û', //251,
      'ü', //252,
      'ý', //253,
      'þ', //254,
      'ÿ', //255, Small y Diaeresis
      'KSC_00', //256, No Key Pressed
      'KSC_01', //257, Keyboard Error Roll Over
      'KSC_02', //258, Keyboard POST Fail
      'KSC_03', //259, Keyboard Error Undefined
      'KEY_A', //260, Keyboard a and A (US English)
      'KEY_B', //261, Keyboard b and B (US English)
      'KEY_C', //262, Keyboard c and C (US English)
      'KEY_D', //263, Keyboard d and D (US English)
      'KEY_E', //264, Keyboard e and E (US English)
      'KEY_F', //265, Keyboard f and F (US English)
      'KEY_G', //266, Keyboard g and G (US English)
      'KEY_H', //267, Keyboard h and H (US English)
      'KEY_I', //268, Keyboard i and I (US English)
      'KEY_J', //269, Keyboard j and J (US English)
      'KEY_K', //270, Keyboard k and K (US English)
      'KEY_L', //271, Keyboard l and L (US English)
      'KEY_M', //272, Keyboard m and M (US English)
      'KEY_N', //273, Keyboard n and N (US English)
      'KEY_O', //274, Keyboard o and O (US English)
      'KEY_P', //275, Keyboard p and P (US English)
      'KEY_Q', //276, Keyboard q and Q (US English)
      'KEY_R', //277, Keyboard r and R (US English)
      'KEY_S', //278, Keyboard s and S (US English)
      'KEY_T', //279, Keyboard t and T (US English)
      'KEY_U', //280, Keyboard u and U (US English)
      'KEY_V', //281, Keyboard v and V (US English)
      'KEY_W', //282, Keyboard w and W (US English)
      'KEY_X', //283, Keyboard x and X (US English)
      'KEY_Y', //284, Keyboard y and Y (US English)
      'KEY_Z', //285, Keyboard z and Z (US English)
      'KEY_1', //286, Keyboard 1 and ! (US English)
      'KEY_2', //287, Keyboard 2 and @ (US English)
      'KEY_3', //288, Keyboard 3 and # (US English)
      'KEY_4', //289, Keyboard 4 and $ (US English)
      'KEY_5', //290, Keyboard 5 and % (US English)
      'KEY_6', //291, Keyboard 6 and ^ (US English)
      'KEY_7', //292, Keyboard 7 and & (US English)
      'KEY_8', //293, Keyboard 8 and * (US English)
      'KEY_9', //294, Keyboard 9 and ( (US English)
      'KEY_0', //295, Keyboard 0 and ) (US English)
      'ENTER', //296, Keyboard Return (US English)
      'ESC', //297, Keyboard Escape (US English)
      'BKSP', //298, Keyboard Backspace (US English)
      'TAB', //299, Keyboard Tab (US English)
      'KSC_2C', //300, Keyboard Space (US English)
      'KSC_2D', //301, Keyboard - and _ (US English)
      'KSC_2E', //302, Keyboard = and + (US English)
      'KSC_2F', //303, Keyboard [ and { (US English)
      'KSC_30', //304, Keyboard ] and } (US English)
      'KSC_31', //305, Keyboard \ and | (US English)
      'KSC_32', //306, Keyboard Non-US # and ~ (US English)
      'KSC_33', //307, Keyboard ; and : (US English)
      'KSC_34', //308, Keyboard ' and " (US English)
      'KSC_35', //309, Keyboard ` and ~ (US English)
      'KSC_36', //310, Keyboard , and < (US English)
      'KSC_37', //311, Keyboard . and > (US English)
      'KSC_38', //312, Keyboard / and ? (US English)
      'CAPSLOCK', //313, Keyboard Caps Lock
      'F1', //314, Keyboard F1
      'F2', //315, Keyboard F2
      'F3', //316, Keyboard F3
      'F4', //317, Keyboard F4
      'F5', //318, Keyboard F5
      'F6', //319, Keyboard F6
      'F7', //320, Keyboard F7
      'F8', //321, Keyboard F8
      'F9', //322, Keyboard F9
      'F10', //323, Keyboard F10
      'F11', //324, Keyboard F11
      'F12', //325, Keyboard F12
      'PRTSCN', //326, Keyboard Print Screen
      'SCRLK', //327, Keyboard Scroll Lock
      'PAUSE', //328, Keyboard Pause
      'INSERT', //329, Keyboard Insert
      'HOME', //330, Keyboard Home
      'PGUP', //331, Keyboard Page Up
      'DELETE', //332, Keyboard Delete Forward
      'END', //333, Keyboard End
      'PGDN', //334, Keyboard Page Down
      'ARROW_RT', //335, Keyboard Right Arrow
      'ARROW_LF', //336, Keyboard Left Arrow
      'ARROW_DN', //337, Keyboard Down Arrow
      'ARROW_UP', //338, Keyboard Up Arrow
      'NUMLOCK', //339, Keyboard Num Lock and Clear
      'KP_SLASH', //340, Keypad /
      'KP_ASTER', //341, Keypad *
      'KP_MINUS', //342, Keypad -
      'KP_PLUS', //343, Keypad +
      'KP_ENTER', //344, Keypad Enter
      'KP_1', //345, Keypad 1 and End
      'KP_2', //346, Keypad 2 and Down Arrow
      'KP_3', //347, Keypad 3 and Page Down
      'KP_4', //348, Keypad 4 and Left Arrow
      'KP_5', //349, Keypad 5
      'KP_6', //350, Keypad 6 and Right Arrow
      'KP_7', //351, Keypad 7 and Home
      'KP_8', //352, Keypad 8 and Up Arrow
      'KP_9', //353, Keypad 9 and Page Up
      'KP_0', //354, Keypad 0 and Insert
      'KP_DOT', //355, Keypad . and Delete
      'KSC_64', //356, Keyboard Non-US \ and | (US English)
      'COMPOSE', //357, Keyboard Application
      'POWER', //358, Keyboard Power
      'KP_EQUAL', //359, Keypad =
      'F13', //360, Keyboard F13
      'F14', //361, Keyboard F14
      'F15', //362, Keyboard F15
      'F16', //363, Keyboard F16
      'F17', //364, Keyboard F17
      'F18', //365, Keyboard F18
      'F19', //366, Keyboard F19
      'F20', //367, Keyboard F20
      'F21', //368, Keyboard F21
      'F22', //369, Keyboard F22
      'F23', //370, Keyboard F23
      'F24', //371, Keyboard F24
      'EXECUTE', //372, Keyboard Execute
      'HELP', //373, Keyboard Help
      'MENU', //374, Keyboard Menu
      'SELECT', //375, Keyboard Select
      'STOP', //376, Keyboard Stop
      'AGAIN', //377, Keyboard Again
      'UNDO', //378, Keyboard Undo
      'CUT', //379, Keyboard Cut
      'COPY', //380, Keyboard Copy
      'PASTE', //381, Keyboard Paste
      'FIND', //382, Keyboard Find
      'MUTE', //383, Keyboard Mute
      'VOL_UP', //384, Keyboard Volume Up
      'VOL_DN', //385, Keyboard Volume Down
      'KSC_82', //386, Keyboard Locking Caps Lock
      'KSC_83', //387, Keyboard Locking Num Lock
      'KSC_84', //388, Keyboard Locking Scroll Lock
      'KP_COMMA', //389, Keypad Comma
      'KSC_86', //390, Keypad Equals Sign
      'INTL1', //391, Keyboard International1
      'INTL2', //392, Keyboard International2
      'INTL3', //393, Keyboard International3
      'INTL4', //394, Keyboard International4
      'INTL5', //395, Keyboard International5
      'INTL6', //396, Keyboard International6
      'INTL7', //397, Keyboard International7
      'INTL8', //398, Keyboard International8
      'INTL9', //399, Keyboard International9
      'LANG1', //400, Keyboard LANG1
      'LANG2', //401, Keyboard LANG2
      'LANG3', //402, Keyboard LANG3
      'LANG4', //403, Keyboard LANG4
      'LANG5', //404, Keyboard LANG5
      'LANG6', //405, Keyboard LANG6
      'LANG7', //406, Keyboard LANG7
      'LANG8', //407, Keyboard LANG8
      'LANG9', //408, Keyboard LANG9
      'KSC_99', //409, Keyboard Alternate Erase
      'KSC_9A', //410, Keyboard SysReq/Attention
      'KSC_9B', //411, Keyboard Cancel
      'KSC_9C', //412, Keyboard Clear
      'KSC_9D', //413, Keyboard Prior
      'KSC_9E', //414, Keyboard Return
      'KSC_9F', //415, Keyboard Separator
      'KSC_A0', //416, Keyboard Out
      'KSC_A1', //417, Keyboard Oper
      'KSC_A2', //418, Keyboard Clear/Again
      'KSC_A3', //419, Keyboard CrSel/Props
      'KSC_A4', //420, Keyboard ExSel
      'KSC_A5', //421,
      'KSC_A6', //422,
      'KSC_A7', //423,
      'KSC_A8', //424,
      'KSC_A9', //425,
      'KSC_AA', //426,
      'KSC_AB', //427,
      'KSC_AC', //428,
      'KSC_AD', //429,
      'KSC_AE', //430,
      'KSC_AF', //431,
      'KSC_B0', //432, Keypad 00
      'KSC_B1', //433, Keypad 000
      'KSC_B2', //434, Thousands Separator
      'KSC_B3', //435, Decimal Separator
      'KSC_B4', //436, Currency Unit
      'KSC_B5', //437, Currency Sub-unit
      'KSC_B6', //438, Keypad (
      'KSC_B7', //439, Keypad )
      'KSC_B8', //440, Keypad {
      'KSC_B9', //441, Keypad }
      'KSC_BA', //442, Keypad Tab
      'KSC_BB', //443, Keypad Backspace
      'KSC_BC', //444, Keypad A
      'KSC_BD', //445, Keypad B
      'KSC_BE', //446, Keypad C
      'KSC_BF', //447, Keypad D
      'KSC_C0', //448, Keypad E
      'KSC_C1', //449, Keypad F
      'KSC_C2', //450, Keypad XOR
      'KSC_C3', //451, Keypad ^
      'KSC_C4', //452, Keypad %
      'KSC_C5', //453, Keypad <
      'KSC_C6', //454, Keypad >
      'KSC_C7', //455, Keypad &
      'KSC_C8', //456, Keypad &&
      'KSC_C9', //457, Keypad |
      'KSC_CA', //458, Keypad ||
      'KSC_CB', //459, Keypad :
      'KSC_CC', //460, Keypad #
      'KSC_CD', //461, Keypad Space
      'KSC_CE', //462, Keypad @
      'KSC_CF', //463, Keypad !
      'KSC_D0', //464, Keypad Memory Store
      'KSC_D1', //465, Keypad Memory Recall
      'KSC_D2', //466, Keypad Memory Clear
      'KSC_D3', //467, Keypad Memory Add
      'KSC_D4', //468, Keypad Memory Subtract
      'KSC_D5', //469, Keypad Memory Multiply
      'KSC_D6', //470, Keypad Memory Divide
      'KSC_D7', //471, Keypad +/-
      'KSC_D8', //472, Keypad Clear
      'KSC_D9', //473, Keypad Clear Entry
      'KSC_DA', //474, Keypad Binary
      'KSC_DB', //475, Keypad Octal
      'KSC_DC', //476, Keypad Decimal
      'KSC_DD', //477, Keypad Hexadecimal
      'KSC_DE', //478,
      'KSC_DF', //479,
      'KSC_E0', //480, Keyboard Left Control
      'KSC_E1', //481, Keyboard Left Shift
      'KSC_E2', //482, Keyboard Left Alt
      'KSC_E3', //483, Keyboard Left GUI
      'KSC_E4', //484, Keyboard Right Control
      'KSC_E5', //485, Keyboard Right Shift
      'KSC_E6', //486, Keyboard Right Alt
      'KSC_E7', //487, Keyboard Right GUI
      'KSC_E8', //488, Media Play Pause
      'KSC_E9', //489, Media Stop CD
      'KSC_EA', //490, Media Previous Song
      'KSC_EB', //491, Media Next Song
      'KSC_EC', //492, Media Eject CD
      'KSC_ED', //493, Media Volume Up
      'KSC_EE', //494, Media Volume Down
      'KSC_EF', //495, Media Mute
      'KSC_F0', //496, Media www
      'KSC_F1', //497, Media Back
      'KSC_F2', //498, Media Forward
      'KSC_F3', //499, Media Stop
      'KSC_F4', //500, Media Find
      'KSC_F5', //501, Media Scroll Up
      'KSC_F6', //502, Media Scroll Down
      'KSC_F7', //503, Media Edit
      'KSC_F8', //504, Media Sleep
      'KSC_F9', //505, Media Coffee
      'KSC_FA', //506, Media Refresh
      'KSC_FB', //507, Media Calc
      'KSC_FC', //508,
      'KSC_FD', //509,
      'KSC_FE', //510,
      'KSC_FF', //511,
      'LEFT_CTRL', //512, Left Control Keyboard Modifier
      'LEFT_SHIFT', //513, Left Shift Keyboard Modifier
      'LEFT_ALT', //514, Left Alt Keyboard Modifier
      'LEFT_GUI', //515, Left GUI Keyboard Modifier
      'RIGHT_CTRL', //516, Right Control Keyboard Modifier
      'RIGHT_SHIFT', //517, Right Shift Keyboard Modifier
      'RIGHT_ALT', //518, Right Alt Keyboard Modifier
      'RIGHT_GUI', //519, Right GUI Keyboard Modifier
      'RELEASE_MOD', //520, Release all keyboard modifiers
      'RELEASE_ALL', //521, Release all keys and keyboard modifiers
      'RELEASE_KEYS', //522, Release all keys, but not keyboard modifiers
      '', //523,
      '', //524,
      '', //525,
      '', //526,
      '', //527,
      'RESTART', //528, Restart Device
      '', //529,
      'BOOT', //530, Bootloader Mode
      '', //531,
      'GTM', //532, Toggle GTM
      '', //533,
      'IMPULSE', //534, Toggle Impulse
      '', //535,
      'DUP', //536, Repeat Last Note
      '', //537,
      'SPUR', //538, Spur Toggle
      '', //539,
      'AMBILEFT', //540, AmbiThrow (left)
      '', //541,
      'AMBIRIGHT', //542, AmbiThrow (right)
      '', //543,
      'SPACERIGHT', //544, Right Spacebar (eg CC Lite)
      '', //545,
      '', //546,
      '', //547,
      'KM_1_L', //548, Primary Keymap (left key)
      'KM_1_R', //549, Primary Keymap (right key)
      'KM_2_L', //550, Secondary Keymap [Num-shift] (left key)
      'KM_2_R', //551, Secondary Keymap [Num-shift] (right key)
      'KM_3_L', //552, Tertiary Keymap (left key)
      'KM_3_R', //553, Tertiary Keymap (left key)
      '', //554,
      '', //555,
      '', //556,
      '', //557,
      '', //558,
      '', //559,
      '', //560,
      '', //561,
      'MS_CLICK_LF', //562, Mouse Left Button Press and Release
      'MS_CLICK_RT', //563, Mouse Right Button Press and Release
      'MS_CLICK_MD', //564, Mouse Middle Button Press and Release
      'MS_MOVE_RT', //565, Mouse Move Right
      'MS_MOVE_LF', //566, Mouse Move Left
      'MS_MOVE_DN', //567, Mouse Move Down
      'MS_MOVE_UP', //568, Mouse Move Up
      'MS_SCRL_RT', //569, Mouse Scroll Coast Right
      'MS_SCRL_LF', //570, Mouse Scroll Coast Left
      'MS_SCRL_DN', //571, Mouse Scroll Coast Down
      'MS_SCRL_UP' //572, Mouse Scroll Coast Up
  ];


  const oldAsciiKeyReplacementDictionary={
    'Tab':'TAB', //Horizontal Tab
    'BAC':'BKSP', //Backspace
    'LF':'ENTER', //Line Feed, New Line
    'SPA':'SPACE', //Space
    'Reset':'RESTART', //Reset Controller
    'Bootloader':'BOOT', //Bootloader Mode
    'Impulse':'IMPULSE', //Impulse
    'LAT':'AMBILEFT', //AmbiThrow (left)
    'RAT':'AMBIRIGHT', //AmbiThrow (right)
    'LNS':'KM_2_L', //Number KeyMap(left)
    'RNS':'KM_2_R', //Number KeyMap(right)
    'SpurToggle':'SPUR', //Spur Toggle
    'Dup':'DUP', //Repeat Last Note
    'ImpulseToggle':'IMPULSE', //Toggle Impulse Function in Firmware
    'GTM':'GTM', //Generative Text Menu
    'MLB':'MS_CLICK_LF', //Mouse Left Button Press and Release
    'RMC':'MS_CLICK_RT', //Mouse Right Button Press and Release
    'MMB':'MS_CLICK_MD', //Mouse Middle Button Press and Release
    'MouseLeftBtnToggle':'', //Mouse Left Button Toggle
    'MouseRightBtnToggle':'', //Mouse Right Button Toggle
    'MouseMiddleBtnToggle':'', //Mouse Middle Button Toggle
    'MouseLeftBtnPress':'', //Mouse Left Button Press
    'MouseRightBtnPress':'', //Mouse Right Button Press
    'MouseMiddleBtnPress':'', //Mouse Middle Button Press
    'MouseLeftBtnRelease':'', //Mouse Left Button Release
    'MouseRightBtnRelease':'', //Mouse Right Button Release
    'MouseMiddleBtnRelease':'', //Mouse Middle Button Release
    'M↓':'MS_MOVE_DN', //Mouse Move Down
    'M→':'MS_MOVE_RT', //Mouse Move Right
    'M↑':'MS_MOVE_UP', //Mouse Move Up
    'M←':'MS_MOVE_LF', //Mouse Move Left
    'MSD':'MS_SCRL_DN', //Mouse Scroll Coast Down
    'MouseScrollCoastRight':'MS_SCRL_RT', //Mouse Scroll Coast Right
    'MSU':'MS_SCRL_UP', //Mouse Scroll Coast Up
    'MouseScrollCoastLeft':'MS_SCRL_LF', //Mouse Scroll Coast Left
    'LeftDoubleClick':'', //Left Double Click
    'RightDoubleClick':'', //Right Double Click
    'TripleClick':'', //Left Triple Click
    'PwrStat':'POWER', //Power(Keyboard Power Status)
    'ReleaseMods':'RELEASE_MOD', //Release All Modifier Keys
    'LCK':'LEFT_CTRL', //LeftControl
    'LSK':'LEFT_SHIFT', //LeftShift
    'LAK':'LEFT_ALT', //LeftAlt
    'LGK':'LEFT_GUI', //Left GUI
    'RCK':'RIGHT_CTRL', //RightControl
    'RSK':'RIGHT_SHIFT', //RightShift
    'RAK':'RIGHT_ALT', //RightAlt
    'RGK':'RIGHT_GUI', //RightGUI
    'CAP':'CAPSLOCK', //Caps Lock
    'PrintScreen':'PRTSCN', //PrintScreen
    'ScrollLock':'SCRLK', //Scroll Lock
    'Pause':'PAUSE', //Pause
    'Insert':'INSERT', //Insert
    'Home':'HOME', //Home
    'PageUp':'PGUP', //PageUp
    'DeleteForward':'DELETE', //Delete Forward
    'End':'END', //End
    'PageDown':'PGDN', //PageDown
    '→':'ARROW_RT', //RightArrow
    '←':'ARROW_LF', //LeftArrow
    '↓':'ARROW_DN', //DownArrow
    '↑':'ARROW_UP', //UpArrow
    'NumLock':'NUMLOCK', //Num Lock and Clear
    'Execute':'EXECUTE', //Execute
    'Help':'HELP', //Help
    'Menu':'MENU', //Menu
    'Select':'SELECT', //Select
    'Stop':'STOP', //Stop
    'Again':'AGAIN', //Again
    'Undo':'UNDO', //Undo
    'Cut':'CUT', //Cut
    'Copy':'COPY', //Copy
    'Paste':'PASTE', //Paste
    'Find':'FIND', //Find
    'Mute':'MUTE', //Mute
    'VolUp':'VOL_UP', //Volume Up
    'VolDn':'VOL_DN', //Volume Down
    'Intl1':'INTL1', //International1
    'Intl2':'INTL2', //International2
    'Intl3':'INTL3', //International3
    'Intl4':'INTL4', //International4
    'Intl5':'INTL5', //International5
    'Intl6':'INTL6', //International6
    'Intl7':'INTL7', //International7
    'Intl8':'INTL8', //International8
    'Intl9':'INTL9', //International9
    'AtlErase':'KSC_99', //Alternate Erase
    'SysReq':'KSC_9A', //SysReq/Attention
    'Cancel':'KSC_9B', //Cancel
    'Clear':'KSC_9C', //Clear
    'Prior':'KSC_9D', //Prior
    'Return':'KSC_9E', //Return
    'Separator':'KSC_9F', //Separator
    'Out':'KSC_A0', //Out
    'Oper':'KSC_A1', //Oper
    'Clear/Again':'KSC_A2', //Clear/Again
    'CrSel/Props':'KSC_A3', //CrSel/Props
    'ExSel':'KSC_A4', //ExSel
    'ThouSep':'KSC_B2', //Thousands Separator
    'DeciSep':'KSC_B3', //Decimal Separator
    'CurrencyUnit':'KSC_B4', //Currency Unit
    'CurrencySubUnit':'KSC_B5', //Currency Sub-unit
    'KPMStore':'KSC_D0', //Keypad Memory Store
    'KPMRecall':'KSC_D1', //Keypad Memory Recall
    'KPMClear':'KSC_D2', //Keypad Memory Clear
    'KPMAdd':'KSC_D3', //Keypad Memory Add
    'KPMSub':'KSC_D4', //Keypad Memory Subtract
    'KPMMult':'KSC_D5', //Keypad Memory Multiply
    'KPMDiv':'KSC_D6', //Keypad Memory Divide
    'KP+/-':'KSC_D7', //Keypad +/-
    'KPClear':'KSC_D8', //Keypad Clear
    'KPClearEntry':'KSC_D9', //Keypad Clear Entry
    'KPBin':'KSC_DA', //Keypad Binary
    'KPOct':'KSC_DB', //Keypad Octal
    'KPDec':'KSC_DC', //Keypad Decimal
    'KPHex':'KSC_DD', //Keypad Hexadecimal
    'KMPlayPause':'KSC_E8', //KEY_MEDIA_PLAYPAUSE
    'KMStopCD':'KSC_E9', //KEY_MEDIA_STOPCD
    'KMPrevSong':'KSC_EA', //KEY_MEDIA_PREVIOUSSONG
    'KMNextSong':'KSC_EB', //KEY_MEDIA_NEXTSONG
    'KMEjectCD':'KSC_EC', //KEY_MEDIA_EJECTCD
    'KMVolUp':'KSC_ED', //KEY_MEDIA_VOLUMEUP
    'KMVolDn':'KSC_EE', //KEY_MEDIA_VOLUMEDOWN
    'KMMute':'KSC_EF', //KEY_MEDIA_MUTE
    'KMwww':'KSC_F0', //KEY_MEDIA_WWW
    'KMBack':'KSC_F1', //KEY_MEDIA_BACK
    'KMForward':'KSC_F2', //KEY_MEDIA_FORWARD
    'KMStop':'KSC_F3', //KEY_MEDIA_STOP
    'KMFind':'KSC_F4', //KEY_MEDIA_FIND
    'KMScrollUp':'KSC_F5', //KEY_MEDIA_SCROLLUP
    'KMScrollDn':'KSC_F6', //KEY_MEDIA_SCROLLDOWN
    'KMEdit':'KSC_F7', //KEY_MEDIA_EDIT
    'KMSleep':'KSC_F8', //KEY_MEDIA_SLEEP
    'KMCoffee':'KSC_F9', //KEY_MEDIA_COFFEE
    'KMRefresh':'KSC_FA', //KEY_MEDIA_REFRESH
    'CC_Physical':'', //
    'RH_Thumb_3_Center':'RH_THUMB_3_3D', //
    'RH_Thumb_2_Center':'RH_THUMB_2_3D', //
    'RH_Thumb_1_Center':'RH_THUMB_1_3D', //
    'RH_Pinky_Center':'RH_PINKY_3D', //
    'RH_Ring_Secondary_Center':'RH_RING_2_3D', //
    'RH_Ring_Primary_Center':'RH_RING_1_3D', //
    'RH_Middle_Secondary_Center':'RH_MID_2_3D', //
    'RH_Middle_Primary_Center':'RH_MID_1_3D', //
    'RH_Index_Center':'RH_INDEX_3D', //
    'LH_Thumb_3_Center':'LH_THUMB_3_3D', //
    'LH_Thumb_2_Center':'LH_THUMB_2_3D', //
    'LH_Thumb_1_Center':'LH_THUMB_1_3D', //
    'LH_Pinky_Center':'LH_PINKY_3D', //
    'LH_Ring_Secondary_Center':'LH_RING_2_3D', //
    'LH_Ring_Primary_Center':'LH_RING_1_3D', //
    'LH_Middle_Secondary_Center':'LH_MID_2_3D', //
    'LH_Middle_Primary_Center':'LH_MID_1_3D', //
    'LH_Index_Center':'LH_INDEX_3D' //
};

export { _actionMap, _keyMapDefaults, _keyMap, _chordMaps, _chordLayout, actionMap, oldAsciiKeyReplacementDictionary };




