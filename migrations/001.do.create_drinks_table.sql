create table drinks (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title text not null,
    modified TIMESTAMPTZ DEFAULT now() NOT NULL,
    alcohol text not null,
    mixers text not null,
    liqueurs text not null,
    juices text not null,
    other text not null,
    instructions text not null
);