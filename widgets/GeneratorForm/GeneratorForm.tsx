import React, { useCallback, useState } from "react";
import { UrlGenerator } from "../../entities/UrlGenerator";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import { Button, Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { GeneratedLink } from "../../shared/GeneratedLink";

export const GeneratorForm = () => {
  const [generated_link, setGeneratedLink] = useState("");
  const validateSourceUrl = useCallback((value: string) => {
    if (!value) return "Введите исходный URL";
  }, []);
  const formik = useFormik({
    initialValues: {
      sourceUrl: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_id: "",
      utm_term: "",
    },
    onSubmit: (values) => {
      const generator = new UrlGenerator(values.sourceUrl);
      setGeneratedLink(generator.build({ ...values, sourceUrl: "" }));
      console.log(values);
    },
  });
  /*
        - исходная ссылка
        - utm_source
        - utm_medium
        - utm_campaign
        - utm_id
        - utm_term
        - utm_content
    */
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <Box mt={2}>
          <TextField
            fullWidth
            required
            name="sourceUrl"
            label="Адерес страницы"
            value={formik.values.sourceUrl}
            onChange={formik.handleChange}
            error={formik.touched.sourceUrl && Boolean(formik.errors.sourceUrl)}
            helperText={formik.touched.sourceUrl && formik.errors.sourceUrl}
          />
          <Typography variant="body2" gutterBottom>
            Адрес страницы, на которую должен перейти посетитель
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <Box>
                <TextField
                  fullWidth
                  required
                  name="utm_source"
                  label="Источник кампании (utm_source)"
                  placeholder="yandex"
                  value={formik.values.utm_source}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.utm_source &&
                    Boolean(formik.errors.utm_source)
                  }
                  helperText={
                    formik.touched.utm_source && formik.errors.utm_source
                  }
                />
                <Typography variant="body2" gutterBottom>
                  Источник перехода: google, yandex, newsletter и т.п.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box>
                <TextField
                  fullWidth
                  required
                  name="utm_medium"
                  placeholder="cpc"
                  label="Тип трафика (utm_medium)"
                  value={formik.values.utm_medium}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.utm_medium &&
                    Boolean(formik.errors.utm_medium)
                  }
                  helperText={
                    formik.touched.utm_medium && formik.errors.utm_medium
                  }
                />
                <Typography variant="body2" gutterBottom>
                  Тип трафика: cpc, ppc, banner, email и т.п.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                name="utm_id"
                placeholder="42"
                label="Идентификатор кампании (utm_id)"
                value={formik.values.utm_id}
                onChange={formik.handleChange}
                error={formik.touched.utm_id && Boolean(formik.errors.utm_id)}
                helperText={formik.touched.utm_id && formik.errors.utm_id}
              />
              <Typography variant="body2" gutterBottom>
                Идентификатор рекламной кампании.
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                name="utm_campaign"
                placeholder="black_friday"
                label="Название кампании (utm_campaign)"
                value={formik.values.utm_campaign}
                onChange={formik.handleChange}
                error={
                  formik.touched.utm_campaign &&
                  Boolean(formik.errors.utm_campaign)
                }
                helperText={
                  formik.touched.utm_campaign && formik.errors.utm_campaign
                }
              />
              <Typography variant="body2" gutterBottom>
                Товар, промокод или слоган (например, <em>black_friday</em>)
                Требуется либо название кампании либо идентификатор кампании.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                name="utm_term"
                placeholder="свитер с оленями"
                label="Ключевое слово (utm_term)"
                value={formik.values.utm_term}
                onChange={formik.handleChange}
                error={
                  formik.touched.utm_term && Boolean(formik.errors.utm_term)
                }
                helperText={formik.touched.utm_term && formik.errors.utm_term}
              />
              <Typography variant="body2" gutterBottom>
                Определяет оплачиваемые ключевые слова
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                name="utm_content"
                label="Содержание кампании (utm_content)"
                value={formik.values.utm_content}
                onChange={formik.handleChange}
                error={
                  formik.touched.utm_content &&
                  Boolean(formik.errors.utm_content)
                }
                helperText={
                  formik.touched.utm_content && formik.errors.utm_content
                }
              />
              <Typography variant="body2" gutterBottom>
                Дополнительная информация, позволяющая различать объявления
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Button type="submit" variant="contained" size="large" fullWidth>
          Сгенерировать UTM ссылку
        </Button>
        <GeneratedLink url={generated_link} />
      </Stack>
    </form>
  );
};
