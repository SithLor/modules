class VerifyFileExtension {
    //#region IMAGE
    static IsImage(url: string): boolean {
        return /\.(png|jpg|jpeg|gif|bmp|webp)$/.test(url);
    }
    static IsPNG(url: string): boolean {
        return /\.png$/.test(url);
    }
    static IsJPG(url: string): boolean {
        return /\.jpg$/.test(url);
    }
    static IsJPEG(url: string): boolean {
        return /\.jpeg$/.test(url);
    }
    static IsGIF(url: string): boolean {
        return /\.gif$/.test(url);
    }
    static IsBMP(url: string): boolean {
        return /\.bmp$/.test(url);
    }
    static IsWEBP(url: string): boolean {
        return /\.webp$/.test(url);
    }
    //#endregion
    //#region VIDEO
    static IsVideo(url: string): boolean {
        return /\.(mp4|webm|ogg|ogv|avi|wmv|mov|flv)$/.test(url);
    }
    static IsMP4(url: string): boolean {
        return /\.mp4$/.test(url);
    }
    static IsWEBM(url: string): boolean {
        return /\.webm$/.test(url);
    }
    static IsOGG(url: string): boolean {
        return /\.ogg$/.test(url);
    }
    static IsOGV(url: string): boolean {
        return /\.ogv$/.test(url);
    }
    static IsAVI(url: string): boolean {
        return /\.avi$/.test(url);
    }
    static IsWMV(url: string): boolean {
        return /\.wmv$/.test(url);
    }
    static IsMOV(url: string): boolean {
        return /\.mov$/.test(url);
    }
    static IsFLV(url: string): boolean {
        return /\.flv$/.test(url);
    }
    //#endregion
    //#region FONT
    static IsFont(url: string): boolean {
        return /\.(woff|woff2|ttf|eot|otf)$/.test(url);
    }
    static IsWoff(url: string): boolean {
        return /\.woff$/.test(url);
    }
    static IsWoff2(url: string): boolean {
        return /\.woff2$/.test(url);
    }
    static IsTTF(url: string): boolean {
        return /\.ttf$/.test(url);
    }
    static IsEOT(url: string): boolean {
        return /\.eot$/.test(url);
    }
    static IsOTF(url: string): boolean {
        return /\.otf$/.test(url);
    }
    //#endregion
    //#region AUDIO
    static IsAudio(url: string): boolean {
        return /\.(mp3|wav|ogg|flac|aac|opus)$/.test(url);
    }
    static IsMP3(url: string): boolean {
        return /\.mp3$/.test(url);
    }
    static IsWAV(url: string): boolean {
        return /\.wav$/.test(url);
    }
    static IsFLAC(url: string): boolean {
        return /\.flac$/.test(url);
    }
    static IsAAC(url: string): boolean {
        return /\.aac$/.test(url);
    }
    static IsOPUS(url: string): boolean {
        return /\.opus$/.test(url);
    }
    //#endregion
    //#region OPEN-DOCUMENT
    static IsOpenDocument(url: string): boolean {
        return /\.(odt|ods|odp|odg|odc|odf|odb|odi|odm|ott|ots|otp|otg|otc|otf|otb|oti|oth)$/.test(url);
    }
    static IsODT(url: string): boolean {
        return /\.odt$/.test(url);
    }
    static IsODS(url: string): boolean {
        return /\.ods$/.test(url);
    }
    static IsODP(url: string): boolean {
        return /\.odp$/.test(url);
    }
    static IsODG(url: string): boolean {
        return /\.odg$/.test(url);
    }
    static IsODC(url: string): boolean {
        return /\.odc$/.test(url);
    }
    static IsODF(url: string): boolean {
        return /\.odf$/.test(url);
    }
    static IsODB(url: string): boolean {
        return /\.odb$/.test(url);
    }
    static IsODI(url: string): boolean {
        return /\.odi$/.test(url);
    }
    static IsODM(url: string): boolean {
        return /\.odm$/.test(url);
    }
    static IsOTT(url: string): boolean {
        return /\.ott$/.test(url);
    }
    static IsOTS(url: string): boolean {
        return /\.ots$/.test(url);
    }
    static IsOTP(url: string): boolean {
        return /\.otp$/.test(url);
    }
    static IsOTG(url: string): boolean {
        return /\.otg$/.test(url);
    }
    static IsOTC(url: string): boolean {
        return /\.otc$/.test(url);
    }
    static IsOTB(url: string): boolean {
        return /\.otb$/.test(url);
    }
    static IsOTI(url: string): boolean {
        return /\.oti$/.test(url);
    }
    static IsOTH(url: string): boolean {
        return /\.oth$/.test(url);
    }
    //#endregion
    //#region MICROSOFT-DOCUMENT
    static IsMicrosoftDocument(url: string): boolean {
        return /\.(doc|docx|xls|xlsx|ppt|pptx|dot|dotx|xlsb|xlsm|xlt|xltm|xltx|xps|pot|potx|potm|ppam|ppsm|ppsx|pptx|vsd|vsdx|vsdm|vsdxm|vsdxz|vss|vssx|vssm|vst|vstx|vstm|vssm|vstx|vstm|vssm|vstx|vstm|vssm|vstx|vstm)$/.test(url);
    }
    static IsDOC(url: string): boolean {
        return /\.doc$/.test(url);
    }
    static IsDOCX(url: string): boolean {
        return /\.docx$/.test(url);
    }
    static IsXLS(url: string): boolean {
        return /\.xls$/.test(url);
    }
    static IsXLSX(url: string): boolean {
        return /\.xlsx$/.test(url);
    }
    static IsPPT(url: string): boolean {
        return /\.ppt$/.test(url);
    }
    static IsPPTX(url: string): boolean {
        return /\.pptx$/.test(url);
    }
    static IsDOT(url: string): boolean {
        return /\.dot$/.test(url);
    }
    static IsDOTX(url: string): boolean {
        return /\.dotx$/.test(url);
    }
    static IsXLSB(url: string): boolean {
        return /\.xlsb$/.test(url);
    }
    static IsXLSM(url: string): boolean {
        return /\.xlsm$/.test(url);
    }
    static IsXLT(url: string): boolean {
        return /\.xlt$/.test(url);
    }
    static IsXLTM(url: string): boolean {
        return /\.xltm$/.test(url);
    }
    static IsXLTX(url: string): boolean {
        return /\.xltx$/.test(url);
    }
    static IsXPS(url: string): boolean {
        return /\.xps$/.test(url);
    }
    static IsPOT(url: string): boolean {
        return /\.pot$/.test(url);
    }
    static IsPOTX(url: string): boolean {
        return /\.potx$/.test(url);
    }
    static IsPOTM(url: string): boolean {
        return /\.potm$/.test(url);
    }
    static IsPPAM(url: string): boolean {
        return /\.ppam$/.test(url);
    }
    static IsPPSM(url: string): boolean {
        return /\.ppsm$/.test(url);
    }
    static IsPPSX(url: string): boolean {
        return /\.ppsx$/.test(url);
    }
    static IsVSD(url: string): boolean {
        return /\.vsd$/.test(url);
    }
    static IsVSDX(url: string): boolean {
        return /\.vsdx$/.test(url);
    }
    static IsVSDM(url: string): boolean {
        return /\.vsdm$/.test(url);
    }
    static IsVSDXM(url: string): boolean {
        return /\.vsdxm$/.test(url);
    }
    //#endregion
    //#region MICROSOFT-BINARY
    static IsMicrosoftBinary(url: string): boolean {
        return /\.(dll|exe|msi|cab|sys|src)$/.test(url);
    }
    static IsDLL(url: string): boolean {
        return /\.dll$/.test(url);
    }
    static IsEXE(url: string): boolean {
        return /\.exe$/.test(url);
    }
    static IsMSI(url: string): boolean {
        return /\.msi$/.test(url);
    }
    static IsCAB(url: string): boolean {
        return /\.cab$/.test(url);
    }
    static IsSYS(url: string): boolean {
        return /\.sys$/.test(url);
    }
    static IsSRC(url: string): boolean {
        return /\.src$/.test(url);
    }
    //#endregion
    //#region unix-binary
    static IsSO(url: string): boolean {
        return /\.so$/.test(url);
    }
    static IsELF(url: string): boolean {
        return /\.elf$/.test(url);
    }
    static IsDEB(url: string): boolean {
        return /\.deb$/.test(url);
    }
    static IsRPM(url: string): boolean {
        return /\.rpm$/.test(url);
    }
    static IsAPK(url: string): boolean {
        return /\.apk$/.test(url);
    }
    static IsIPA(url: string): boolean {
        return /\.ipa$/.test(url);
    }
    static IsXAP(url: string): boolean {
        return /\.xap$/.test(url);
    }
    static IsXPI(url: string): boolean {
        return /\.xpi$/.test(url);
    }
    static IsSH(url: string): boolean {
        return /\.sh$/.test(url);
    }
    static IsBIN(url: string): boolean {
        return /\.bin$/.test(url);
    }
    static IsCPIO(url: string): boolean {
        return /\.cpio$/.test(url);
    }
    static IsJAR(url: string): boolean {
        return /\.jar$/.test(url);
    }
    static IsWAR(url: string): boolean {
        return /\.war$/.test(url);
    }
    static IsEAR(url: string): boolean {
        return /\.ear$/.test(url);
    }
    static IsMAR(url: string): boolean {
        return /\.mar$/.test(url);
    }
    static IsLHA(url: string): boolean {
        return /\.lha$/.test(url);
    }
    static IsLZH(url: string): boolean {
        return /\.lzh$/.test(url);
    }
    static IsLZMA(url: string): boolean {
        return /\.lzma$/.test(url);
    }
    static IsPAX(url: string): boolean {
        return /\.pax$/.test(url);
    }
    static IsPAX_GZ(url: string): boolean {
        return /\.pax\.gz$/.test(url);
    }
    static IsPAX_BZ2(url: string): boolean {
        return /\.pax\.bz2$/.test(url);
    }
    static IsPAX_XZ(url: string): boolean {
        return /\.pax\.xz$/.test(url);
    }
    static IsPAX_LZMA(url: string): boolean {
        return /\.pax\.lzma$/.test(url);
    }
    static IsPAX_LZOP(url: string): boolean {
        return /\.pax\.lzop$/.test(url);
    }
    static IsPAX_7Z(url: string): boolean {
        return /\.pax\.7z$/.test(url);
    }
    static IsPAX_RAR(url: string): boolean {
        return /\.pax\.rar$/.test(url);
    }
    static IsPAX_Z(url: string): boolean {
        return /\.pax\.z$/.test(url);
    }
    static IsPAX_GZ2(url: string): boolean {
        return /\.pax\.gz2$/.test(url);
    }
    static IsPAX_BZ22(url: string): boolean {
        return /\.pax\.bz22$/.test(url);
    }
    static IsPAX_XZ2(url: string): boolean {
        return /\.pax\.xz2$/.test(url);
    }
    static IsPAX_LZMA2(url:string): boolean {
        return /\.pax\.lzma2$/.test(url);
    }
    static IsPAX_LZOP2(url: string): boolean {
        return /\.pax\.lzop2$/.test(url);
    }   
    //#endregion
    //#region archive
    static IsTAR(url: string): boolean {
        return /\.tar$/.test(url);
    }
    static IsTAR_GZ(url: string): boolean {
        return /\.tar\.gz$/.test(url);
    }
    static IsTAR_BZ2(url: string): boolean {
        return /\.tar\.bz2$/.test(url);
    }
    static IsTAR_XZ(url: string): boolean {
        return /\.tar\.xz$/.test(url);
    }
    static IsTAR_LZMA(url: string): boolean {
        return /\.tar\.lzma$/.test(url);
    }
    static IsTAR_LZOP(url: string): boolean {
        return /\.tar\.lzop$/.test(url);
    }
    static IsTAR_7Z(url: string): boolean {
        return /\.tar\.7z$/.test(url);
    }
    static IsTAR_RAR(url: string): boolean {
        return /\.tar\.rar$/.test(url);
    }
    static IsTAR_Z(url: string): boolean {
        return /\.tar\.z$/.test(url);
    }
    static IsTAR_ZST(url: string): boolean {
        return /\.tar\.zst$/.test(url);
    }
    static IsTAR_LZ(url: string): boolean {
        return /\.tar\.lz$/.test(url);
    }
    static IsTAR_LZ4(url: string): boolean {
        return /\.tar\.lz4$/.test(url);
    }
    static IsTAR_ZIP(url: string): boolean {
        return /\.tar\.zip$/.test(url);
    }
    static IsTAR_GZ2(url: string): boolean {
        return /\.tar\.gz2$/.test(url);
    }
    static IsTAR_GZ3(url: string): boolean {
        return /\.tar\.gz3$/.test(url);
    }
    static IsZIP(url: string): boolean {
        return /\.zip$/.test(url);
    }
    static IsGZ(url: string): boolean {
        return /\.gz$/.test(url);
    }
    static IsBZ2(url: string): boolean {
        return /\.bz2$/.test(url);
    }
    static IsXZ(url: string): boolean {
        return /\.xz$/.test(url);
    }
    static IsLZMA(url: string): boolean {
        return /\.lzma$/.test(url);
    }
    static IsLZOP(url: string): boolean {
        return /\.lzop$/.test(url);
    }
    static Is7Z(url: string): boolean {
        return /\.7z$/.test(url);
    }
    static IsRAR(url: string): boolean {
        return /\.rar$/.test(url);
    }
    static IsZ(url: string): boolean {
        return /\.z$/.test(url);
    }
    static IsZST(url: string): boolean {
        return /\.zst$/.test(url);
    }
    static IsLZ(url: string): boolean {
        return /\.lz$/.test(url);
    }
    static IsLZ4(url: string): boolean {
        return /\.lz4$/.test(url);
    }
    static IsTAR_GZ4(url: string): boolean {
        return /\.tar\.gz4$/.test(url);
    }
    static IsTAR_GZ5(url: string): boolean {
        return /\.tar\.gz5$/.test(url);
    }
    static IsTAR_GZ6(url: string): boolean {
        return /\.tar\.gz6$/.test(url);
    }
    static IsTAR_GZ7(url: string): boolean {
        return /\.tar\.gz7$/.test(url);
    }
    static IsTAR_GZ8(url: string): boolean {
        return /\.tar\.gz8$/.test(url);
    }
    static IsTAR_GZ9(url: string): boolean {
        return /\.tar\.gz9$/.test(url);
    }
    static IsTAR_GZ10(url: string): boolean {
        return /\.tar\.gz10$/.test(url);
    }
    static IsTAR_GZ11(url: string): boolean {
        return /\.tar\.gz11$/.test(url);
    }
    static IsTAR_GZ12(url: string): boolean {
        return /\.tar\.gz12$/.test(url);
    }
    static IsTAR_GZ13(url: string): boolean {
        return /\.tar\.gz13$/.test(url);
    }
    static IsTAR_GZ14(url: string): boolean {
        return /\.tar\.gz14$/.test(url);
    }
    static IsTAR_GZ15(url:string): boolean {
        return /\.tar\.gz15$/.test(url);
    }
    //#endregion
    //#region text
    static IsTXT(url: string): boolean {
        return /\.txt$/.test(url);
    }
    static IsHTML(url: string): boolean {
        return /\.html$/.test(url);
    }
    static IsXML(url: string): boolean {
        return /\.xml$/.test(url);
    }
    static IsJSON(url: string): boolean {
        return /\.json$/.test(url);
    }
    static IsCSV(url: string): boolean {
        return /\.csv$/.test(url);
    }
    static IsTSV(url: string): boolean {
        return /\.tsv$/.test(url);
    }
    static IsINI(url: string): boolean {
        return /\.ini$/.test(url);
    }
    static IsYAML(url: string): boolean {
        return /\.yaml$/.test(url);
    }
    static IsYML(url: string): boolean {
        return /\.yml$/.test(url);
    }
    static IsTOML(url: string): boolean {
        return /\.toml$/.test(url);
    }
    static IsSQL(url: string): boolean {
        return /\.sql$/.test(url);
    }
    static IsSQLITE(url: string): boolean {
        return /\.sqlite$/.test(url);
    }
    static IsSQLITE3(url: string): boolean {
        return /\.sqlite3$/.test(url);
    }
    static IsSQLITE3DB(url: string): boolean {
        return /\.sqlite3db$/.test(url);
    }
    static IsSQLITEDB(url: string): boolean {
        return /\.sqlitedb$/.test(url);
    }
    static IsSQLITEDB3(url: string): boolean {
        return /\.sqlitedb3$/.test(url);
    }
    static IsSQLITEDB3DB(url: string): boolean {
        return /\.sqlitedb3db$/.test(url);
    }
    static IsSQLITEDB3DB3(url: string): boolean {
        return /\.sqlitedb3db3$/.test(url);
    }
    static IsSQLITEDB3DB3DB(url: string): boolean {
        return /\.sqlitedb3db3db$/.test(url);
    }
    static isTypeScript(url: string): boolean {
        return /\.ts$/.test(url);
    }
    static isJavaScript(url: string): boolean {
        return /\.js$/.test(url);
    }
    static isCoffeeScript(url: string): boolean {
        return /\.coffee$/.test(url);
    }
    static isCSharp(url: string): boolean {
        return /\.cs$/.test(url);
    }
    static isCPlusPlus(url: string): boolean {
        return /\.cpp$/.test(url);
    }
    static isCPlusPlusHeader(url: string): boolean {
        return /\.hpp$/.test(url);
    }
    static isJSX(url: string): boolean {
        return /\.jsx$/.test(url);
    }
    static isTSX(url: string): boolean {
        return /\.tsx$/.test(url);
    }
    //#endregion
}
export default VerifyFileExtension