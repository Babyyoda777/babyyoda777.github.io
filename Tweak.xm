%hook SBFluidSwitcherGestureManager
-(bool)grabberTongue:(id)arg1 shouldAllowSecondSwipeWithEdgeLocation:(float)arg2 {
    return YES;
}
%end

%hook CCUIModularControlCenterOverlayViewController
-(void)dismissAnimated:(bool)arg1 withCompletionHandler:(id)arg2 {
    arg1 = 0;
    %orig;
}
%end

%hook SBControlCenterController
-(unsigned long long)presentingEdge {
    return 1;
}
%end

%hook SBHomeGestureSettings
-(bool)isHomeGestureEnabled {
    return YES;
}
%end

%hook CCSControlCenterDefaults
-(unsigned long long)_defaultPresentationGesture {
    return 1;
}
%end

%hook SpringBoard
-(bool)homeScreenRotationStyleWantsUIKitRotation {
    return NO;
}
%end