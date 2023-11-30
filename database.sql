CREATE TABLE IF NOT EXISTS public.user_dev
(
    device_id uuid NOT NULL,
    user_name text COLLATE pg_catalog."default",
    device_type text COLLATE pg_catalog."default",
    coord_x double precision NOT NULL,
    coord_y double precision NOT NULL,
    CONSTRAINT user_dev_pkey PRIMARY KEY (device_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_dev
    OWNER to postgres;