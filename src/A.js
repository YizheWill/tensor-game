import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const AGesture = new GestureDescription('A');

AGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// AGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
AGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
AGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
AGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
AGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

export const CGesture = new GestureDescription('C');
CGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
CGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
CGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
CGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
CGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
CGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
CGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
CGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
CGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
CGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

export const EGesture = new GestureDescription('E');

EGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// EGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);
EGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
// EGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
EGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
// EGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
EGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
// EGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
EGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
// EGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

export const BGesture = new GestureDescription('B');

BGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
BGesture.addDirection(Finger.Thumb, FingerDirection.DiagnalUpLeft, 1.0);
BGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
BGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
BGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
BGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
BGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
BGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
BGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
BGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export const YGesture = new GestureDescription('Y');
YGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// YGesture.addDirection(Finger.Thumb, FingerDirection.DiagnalUpLeft, 0.75);
YGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
YGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
// YGesture.addDirection(Finger.Pinky, FingerDirection.DiagnalUpRight, 0.75);
YGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

export const WGesture = new GestureDescription('W');
WGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Thumb, FingerDirection.DiagnalUpLeft, 1.0);
WGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// WGesture.addDirection(Finger.Index, FingerDirection.DiagnalRight, 0.75);
WGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
// WGesture.addDirection(Finger.Ring, FingerDirection.DiagnalLeft, 0.75);
WGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// WGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
WGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export const VGesture = new GestureDescription('V');
VGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
VGesture.addDirection(Finger.Thumb, FingerDirection.DiagnalUpLeft, 1.0);
VGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// VGesture.addDirection(Finger.Index, FingerDirection.DiagnalRight, 0.75);
VGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
// VGesture.addDirection(Finger.Ring, FingerDirection.DiagnalLeft, 0.75);
VGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// VGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
VGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export const DGesture = new GestureDescription('D');
DGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
DGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
DGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
DGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
DGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
DGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export const GGesture = new GestureDescription('G');
GGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
GGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
GGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
GGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
GGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
GGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export const LoveGesture = new GestureDescription('ily');
LoveGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
LoveGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
LoveGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
LoveGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
LoveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LoveGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LoveGesture.addCurl(Finger.Pinkey, FingerCurl.NoCurl, 1.0);
