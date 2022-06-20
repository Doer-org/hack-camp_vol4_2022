import os

POSTGRES_USER     = os.environ.get('POSTGRES_USER')
POSTGRES_PASSWORD = os.environ.get('POSTGRES_PASSWORD')
PGPASSWORD        = os.environ.get('PGPASSWORD')
POSTGRES_DB       = os.environ.get('POSTGRES_DB')

DATABASE_URL      = os.environ.get('DATABASE_URL')
DEPLOY_FLAG       = os.environ.get('DEPLOY_FLAG') if os.environ.get('DEPLOY_FLAG') else False
