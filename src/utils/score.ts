import React from 'react'
import { useState, useEffect } from 'react'

let score
let time = 5
let droppedUnit = 1

// ゲーム終了時
score = (1 / time - 2.5) * droppedUnit * 1000

// １個の時、５秒
// ２０個の時、５０秒
