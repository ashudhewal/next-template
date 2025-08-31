wget -p -k -E -H \
    --restrict-file-names=windows,ascii \
    --trust-server-names \
    --no-clobber \
    --adjust-extension \
    --page-requisites \
    --convert-links \
    --backup-converted \
    --reject-regex=".*\?.*" \
    -P "${WEBSITE_NAME}_site" \
    "$URL"