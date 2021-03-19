FINALPACKAGE = 1
DEBUG = 0
ARCHS = arm64 arm64e
TARGET = iphone:clang::13.3


include $(THEOS)/makefiles/common.mk

TWEAK_NAME = iPhoneXLite
ModernUI_FILES = Tweak.xm
export ADDITIONAL_CFLAGS = -fobjc-arc


include $(THEOS_MAKE_PATH)/tweak.mk