# Awesome Nitro Modules

## Audio & Media

react-native-nitro-audio-manager
react-native-video
react-native-nitro-screen-recorder
react-native-nitro-image
@corasan/imagecompressor

-------------------------- Device & Hardware ------------------------------

### react-native-nitro-deviceinfo :

library สำหรับดึงข้อมูลอุปกรณ์ (device info) ใน React Native แบบเร็วมาก

### React-Native-Nitro-Event-Kit :

library สำหรับ อ่านข้อมูลปฏิทิน (Calendar Events) ของผู้ใช้ใน iPhone ภายในแอป

### react-native-nitro-geolocation :

library สำหรับ ดึงตำแหน่ง GPS ของผู้ใช้ ในแอปที่สร้างด้วย React Native โดยใช้ Nitro Modules + JSI ทำให้การเรียกข้อมูลตำแหน่ง เร็วกว่า geolocation library แบบเดิม

### react-native-torch-nitro :

library สำหรับ เปิดปิดไฟแฟลช (flashlight / torch) ของมือถือ ในแอป React Native

### react-native-ble-nitro :

การสื่อสารผ่าน Bluetooth แบบประหยัดพลังงาน ระหว่างมือถือกับอุปกรณ์อื่น

### react-native-vision-camera :

library กล้องที่ เร็วและทรงพลังมาก สำหรับแอปที่สร้างด้วย React Native มันถูกออกแบบมาให้ทำงาน ระดับ realtime camera processing เช่น AI, scanning, video processing ซึ่ง library กล้องธรรมดาทำได้ยาก

### react-native-google-nearby-messages

library ที่ให้แอป React Native สามารถ ค้นหาและสื่อสารกับอุปกรณ์ใกล้เคียงโดยไม่ต้องใช้ internet

#### react-native-blur-hash

คือเทคนิคสำหรับ แสดงภาพเบลอเป็น placeholder ระหว่างที่รูปจริงกำลังโหลด

### react-native-graph

library สำหรับ วาดกราฟเส้น (line chart) ที่เร็วมากใน React Native โดยใช้ engine กราฟิกชื่อ Skia

### react-native-fast-tflite

TensorFlow Lite สำหรับ React Native ที่คุณพูดถึง คือ library สำหรับ รัน AI / Machine Learning model บนมือถือโดยตรง AI camera , document scanning, AR filters , object recognition

### @reactnativeai/apple

เป็น library สำหรับ ใช้ AI ของ Apple (Apple Intelligence / Foundation Models) บน iPhone โดยตรง

### React Native Reanimated & Worklets

— a library for creating smooth animations and interactions in React Native,

a library that enables multithreaded JavaScript execution in React Native applications.

### react-native-super-config

keep .env on device

### react-native-mmkv

Fast key-value storage เหมือน localStorage

// -------------------------- networking ------------------------------

## react-native-nitro-in-app-browser

เปิดเว็บภายในแอป
App
↓
InApp Browser
↓
dikapay.com

ux ดี user ไม่ต้องออกจากแอป

## react-native-nitro-fetch

fetch api

## react-native-nitro-dns

library สำหรับ จัดการ DNS และ network routing ในแอป ของ React Native โดยตรง

## react-native-nitro-http-server

library ที่ทำให้ มือถือสามารถเป็น “Web Server” ได้ ภายในแอปของ React Native

// -------------------------- maps ------------------------------

## react-native-google-maps-plus

https://pinpong.github.io/reactnativegooglemapsplus/
map google

## react-native-clusterer

library สำหรับ รวมจุดจำนวนมากบนแผนที่ ให้เป็นกลุ่ม (cluster) ในแอปที่สร้างด้วย React Native

// -------------------------- utils ------------------------------

## react-native-nitro-dgram

คือ library สำหรับให้แอป React Native ใช้ UDP networking แบบเดียวกับ dgram ของ Node.js

## @bernagl/react-native-date

library สำหรับจัดการวันที่ (date/time) ที่เน้น performance สูง ในแอป เช่น React Native หรือเว็บแอป โดยบอกว่าเหมาะกับสถานการณ์ไหน และเมื่อไหร่ไม่จำเป็นต้องใช้

## react-native-nitro-ota

library ที่ทำให้แอป React Native สามารถ อัปเดตโค้ด JavaScript ของแอปผ่านอินเทอร์เน็ตได้ทันที โดย ไม่ต้องส่งเวอร์ชันใหม่เข้า App Store หรือ Play Store

## React Native Nitro Google SSO

คือ library สำหรับให้แอป React Native ทำ Login ด้วยบัญชี Google (Single SignOn) ได้

## react-native-nitro-mlx

react-native-nitro-mlx คือ library สำหรับ React Native ที่ช่วยให้แอปสามารถ รัน AI model บนอุปกรณ์ผู้ใช้โดยตรง (on-device inference) โดยใช้ Nitro Modules เพื่อเชื่อม JavaScript กับ native code ที่มีประสิทธิภาพสูง

โดย backend ของมันใช้ framework AI ของ Apple คือ MLX

On-device AI (react-native-nitro-mlx)

## react-native-nitro-zlib

library สำหรับ React Native ที่ใช้ บีบอัด (compress) และคลายไฟล์ (decompress) ข้อมูล เช่นเดียวกับ zlib ใน Node.js

## react-native-nitro-buffer

library ที่เพิ่ม Buffer API แบบเดียวกับ Node.js ให้กับ React Native แต่ทำงาน เร็วกว่า JS ปกติ เพราะใช้ C++ + Nitro Modules (JSI)
