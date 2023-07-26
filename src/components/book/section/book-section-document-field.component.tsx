import { IBookSectionFieldValue } from "@/common/interfaces/book/book-section-field-value.interface";
import { BookSectionFieldType, IBookSectionField } from "@/common/interfaces/book/book-section-field.interface";
import { Box, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { FC } from "react";

const BookSectionDocumentField: FC<{ field: IBookSectionField, values: IBookSectionFieldValue[] }> = ({ field, values }) => {
    // todo set function to call when this datas has been changed
    // todo define a list of functions to use useForm for set/get datas and validate
    switch (field.type) {
        case BookSectionFieldType.TEXT:
            return (
                <TextField
                    type={"text"}
                    id={field.identifier}
                    name={field.identifier}
                    label={field.label}
                    placeholder={field.placeholder}
                    defaultValue={values.filter(value => value.identifier == field.identifier)[0]?.value ?? field.default}
                    helperText={`* ${field.helper}`}
                    margin="dense"
                    fullWidth
                />
            );
        case BookSectionFieldType.TEXTAREA:
            return (
                <TextField
                    id={field.identifier}
                    name={field.identifier}
                    placeholder={field.placeholder}
                    defaultValue={values.filter(value => value.identifier == field.identifier)[0]?.value ?? field.default}
                    multiline
                    minRows={2}
                    maxRows={5}
                    fullWidth
                />
            );
        case BookSectionFieldType.NUMBER:
            return (
                <TextField
                    type={"number"}
                    id={field.identifier}
                    name={field.identifier}
                    label={field.label}
                    placeholder={field.placeholder}
                    defaultValue={values.filter(value => value.identifier == field.identifier)[0]?.value ?? field.default}
                    helperText={`* ${field.helper}`}
                    margin="dense"
                    fullWidth
                />
            );
        case BookSectionFieldType.DATE:
            return (
                <DatePicker
                    label={field.label}
                    disablePast={true}
                    defaultValue={values.filter(value => value.identifier == field.identifier)[0]?.value ?? field.default}
                    sx={{ width: '100%' }}
                />
            );
        case BookSectionFieldType.CHECKBOX:
            return (
                <Stack direction={'row'} alignItems={'center'} gap={1} sx={{ marginTop: "15px", marginBottom: '4px' }}>
                    <Box>
                        <Typography variant="subtitle2">{field.label}</Typography>
                        <Typography variant="caption">{`* ${field.helper}`}</Typography>
                    </Box>
                    <Checkbox
                        id={field.identifier}
                        name={field.identifier}
                        placeholder={field.placeholder}
                        defaultValue={values.filter(value => value.identifier == field.identifier)[0]?.value ?? field.default}
                    />
                </Stack>
            );
        default:
            return (null);
    }
}

export default BookSectionDocumentField;