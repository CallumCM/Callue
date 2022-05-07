import setuptools

long_desc = open("README.md").read()
required = ['bottle', 'Paste', 'rcssmin', 'htmlmin', 'jsmin']

setuptools.setup(
    name="Callue",
    version="1.0.0",
    author="Callum",
    author_email="callum@jcwyt.com",
    license="MIT",
    description="A preprocessor of sorts for Bottle.py",
    long_description=long_desc,
    long_description_content_type="text/markdown",
    url="https://github.com/Turnip1234/Callue",
    packages = ['callue'],
    project_urls={
        "Bug Tracker": "https://github.com/Turnip1234/Callue/issues",
    },
    key_words="preprocessor bottle webserver python backend",
    install_requires=required,
    python_requires=">=3.6",
)