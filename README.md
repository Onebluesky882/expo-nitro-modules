# Build a Nitro Native Module

Guide สำหรับสร้าง React Native Nitro Module โดยใช้ nitrogen codegen

## 1. Create Spec (Type Definition)

pnpm add react-native-nitro-modules
src/specs/Math.nitro.ts

```ts
import type { HybridObject } from "react-native-nitro-modules";

export interface Math extends HybridObject<{ ios: "swift" }> {
  add(a: number, b: number): number;
}
```

## 2. Create Native Implementation Files

สร้างไฟล์ implementation เปล่า
ios/HybridMath.swift
android/src/main/java/.../HybridMath.kt

## 3. Generate Native Code

pnpm dlx nitrogen

## 4. Export Module to JavaScript

src/index.ts

import type { Math } from './specs/Math.nitro'
import { NitroModules } from 'react-native-nitro-modules'

export const HybridMath =
NitroModules.createHybridObject<Math>('Math')

## 5.Install Library in App

pnpm add react-native-nitro-modules
pnpm create expo-app my-app
install
pnpm add ../react-native-math --save

checking
pnpm list react-native-math

✅ react-native-math link:../react-native-math

## 6. Prepare iOS Native Build

ขั้นตอนการสร้าง method native (Swift) สำหรับ Nitro Module ใน Xcode จากโปรเจกต์ Expo Dev Client ที่อยู่ใน

หลังจาก install : react-native-math
npx expo run:ios
cd ios
pod install

### จากนั้นเปิดโปรเจกต์ด้วยไฟล์ workspace

finder : /myapp/ios/myapp.xcworkspace
เปิดด้วย xcode

ต้องเปิด .xcworkspace ไม่ใช่ .xcodeproj

## 7. Implement Native Method (Swift)

File : Pods/development pods/NitroMath/ios/HybridMath.swift

```swift
import Foundation
import NitroModules

class HybridMath : HybridMathSpec{
    func add(a: Double, b: Double) throws -> Double {
        return a + b
    }
}
```

## 7.1 config autolinking nitro.json

```json
"autolinking": {
    "Math": {
      "ios": {
        "language": "swift",
        "implementationClassName": "HybridMath"
      },
      "android": {
        "language": "kotlin",
        "implementationClassName": "HybridMath"
      }
    }
  }
```

## 8. Run Codegen Script

back to library : react-native-math
pnpm dlx nitrogen

file : package.json
edit :
from lib to src

```json
  "main": "src/index",
  "module": "src/index",
  "types": "src/index.d.ts",
  "react-native": "src/index",
```

## 8.1 setting Metro Configuration

## Metro Configuration (Expo + pnpm Workspace)

ไฟล์ metro.config.js ใช้สำหรับปรับแต่ง Metro pnpmdler ของ Expo เพื่อให้สามารถทำงานกับ pnpm workspace / monorepo และ library ภายนอก project ได้ เช่น react-native-math

```ts
// on demo use uniwind css
const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "..");

const config = getDefaultConfig(projectRoot);

// ให้ Metro เห็น folder นอก project
config.watchFolders = [workspaceRoot];

// ให้ Metro อ่าน symlink ของ pnpm
config.resolver.unstable_enableSymlinks = true;

// ช่วย resolve node_modules จาก workspace
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./global.css",
});
```

## 9.ทดสอบ Use Module in React Native

import { HybridMath } from "react-native-math"

const result = HybridMath.add(4, 5)

console.log(result) // 9

Checklist (Important)

ก่อน build ต้องเช็ค
• react-native-nitro-modules version ตรงกัน

```

```
